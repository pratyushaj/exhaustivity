library(tidyverse)
library(brms)
library(forcats)
library(stringr)
library(lme4)
library(languageR)
library(ggrepel)

theme_set(theme_bw(18))
source("helpers.r")

d1 = read.table(file="../data/1_critical/experiment1.csv",sep=",", header=T)
d1$workerid = d1$workerid + 300
d2 = read.table(file="../data/1_critical/experiment2.csv",sep=",", header=T)
d = rbind(d1,d2)
# d = read.table(file="../data/1_critical/pilot.csv",sep=",", header=T)
d = as.data.frame(lapply(d, function(x) {gsub('\"',"",x)}))

priors = read.table(file="../data/1_norm/experiment.csv",sep=",", header=T)
priors = as.data.frame(lapply(priors, function(x) {gsub('\"',"",x)}))

#basic tenets of the dataset
head(d)
nrow(d)
summary(d)

d$Trial = as.numeric(as.character(d$slide_number)) - 3
d$Answer.time_in_minutes = as.numeric(as.character(d$Answer.time_in_minutes))
d$age = as.numeric(as.character(d$age))
d$topic = as.factor(as.character(d$topic))
d$slide_number = as.numeric(as.character(d$slide_number))

priors$response = as.numeric(as.character(priors$response))

#need to add the block number 

d = d %>%
  group_by(workerid) %>%
  mutate(block_num = case_when (
    slide_number > 3 & slide_number < 36 & block == 'exhaustivity' & first(block) == 'exhaustivity' ~ 1,
    slide_number > 3 & slide_number < 16 & block == 'qud_assessment' & first(block) == 'qud_assessment' ~ 1,
    slide_number > 36 & slide_number < 49 & block == 'qud_assessment' & last(block) == 'qud_assessment' ~ 2,
    slide_number > 16 & slide_number < 49 & block == 'exhaustivity' & last(block) == 'exhaustivity' ~ 2)) %>%
  ungroup()

#N = 120 prior to exclusion
length(unique(d$workerid))

# # look at turker comments
unique(d$comments)

summary(d$Answer.time_in_minutes)

#plot of full range of response times (for whole experiment in minutes) by trial not by participant
ggplot(d, aes(Answer.time_in_minutes)) +
   geom_histogram()
ggsave(file="../graphs/1_critical/answer_time_in_minutes.png")

#gender breakdown of trials (not by participant)
ggplot(d, aes(gender)) +
   stat_count()
ggsave(file="../graphs/1_critical/participant_gender.png")

#did they understand the HIT?
ggplot(d, aes(asses)) +
   stat_count()
ggsave(file="../graphs/1_critical/participant_understood_task.png")

# age by trial
ggplot(d, aes(age)) +
   geom_histogram()
ggsave(file="../graphs/1_critical/age_by_trial.png")

table(d$age)

#education by trial 
ggplot(d, aes(education)) +
   stat_count()
ggsave(file="../graphs/1_critical/education_by_trial.png")

#language
ggplot(d, aes(language)) +
   stat_count() +
   theme(axis.text.x=element_text(angle=45,hjust=1,vjust=1))
# 
ggplot(d, aes(enjoyment)) +
  stat_count()

#Exclusion criterion 0: native language not English 
#Exclusion criterion 1: response time more than 2 sd's away from mean completion time
#Exclusion criterion 2: Slider responses not close enough to the (clearly) correct side in exh block 
#Exclusion criterion 3: Incorrect MC response in qud block to 2 attention checks 
# JD: we need to discuss the second two exclusion criteria

fails0 = d %>%
  filter(language == 'Urdu' | language == 'Italian') %>%
  droplevels()

length(unique(fails0$workerid))
  
fails1 = d %>%
  filter((abs(Answer.time_in_minutes-mean(d$Answer.time_in_minutes)) > (2.5*sd(d$Answer.time_in_minutes)))) %>% 
  droplevels()

length(unique(fails1$workerid))

fails2 = d %>%
  filter((block == 'exhaustivity' & trial_type == "filler" & qud == "exhaustive" & as.numeric(as.character(response)) < 0.7) | (block == 'exhaustivity' & trial_type == "filler" & qud == "polar" & as.numeric(as.character(response)) > 0.25)) %>%
  droplevels()

# View( d %>%
#         filter(block == 'exhaustivity' & trial_type == 'filler' & workerid %in% fails2$workerid == TRUE) %>%
#         droplevels())

length(unique(fails2$workerid))

fails3 = d %>% filter((block == 'qud_assessment' & trial_type == "filler" & qud == "exhaustive" & response != 'exhaustive') | (block == 'qud_assessment' &trial_type == "filler" & qud == "polar" & response != 'polar'))%>%
 droplevels()

length(unique(fails3$workerid))

#IN TOTAL, 32 EXCLUSIONS ()

#filtering the failures
d = d %>%
  filter(workerid %in% fails0$workerid == FALSE & workerid %in% fails1$workerid == FALSE & workerid %in% fails2$workerid == FALSE & workerid %in% fails3$workerid == FALSE) %>%
  droplevels()

# exhaustivity block critical trials  
exhaustivity = d %>%
  filter(block == 'exhaustivity') %>%
  filter(trial_type == 'critical')%>%
  droplevels()

# distribution of items across qud conditions
table(exhaustivity$topic,exhaustivity$qud)

exhaustivity$response = as.numeric(as.character(exhaustivity$response))

# qud block critical trials only
qud = d %>%
  filter(block == 'qud_assessment') %>%
  filter(trial_type == 'critical')%>%
  droplevels()

#Determining someone's QUD sensitivity score: proportion of exh in exh - proportion of exh in polar (from qud block)
sensitivity = qud %>% 
  group_by(workerid,qud) %>%
  summarise(Mean=mean(response == 'exhaustive')) %>%
  spread(qud,Mean) %>%
  summarise(sensitivityScore = exhaustive - polar)

# Plot sensitivities
ggplot(sensitivity, aes(x=sensitivityScore)) +
  geom_histogram()
ggsave(file="../graphs/1_critical/sensitivities.png")


# Add sensitivities to datasets
qud = qud %>%
  right_join(sensitivity, by=c('workerid'))

exhaustivity = exhaustivity %>%
  right_join(sensitivity, by=c('workerid'))

#Determining something's QUD sensitivity score:

sensitivityItem = qud %>% 
  group_by(topic,qud) %>%
  summarise(Mean=mean(response == 'exhaustive')) %>%
  spread(qud,Mean) %>%
  summarise(sensitivityScoreItem = exhaustive - polar)

#Getting mean priors over all items and adding their "topic" value (since I was stupid and didn't collect with it)
# JD: There seems to be some sort of error here, different number of items, and arranged in wrong order. Fix
priorsItems = priors %>%
  group_by(scenario) %>%
  summarise(Mean=mean(response),CILow=ci.low(response),CIHigh=ci.high(response)) %>%
  ungroup() %>%
  mutate(YMin=Mean-CILow,YMax=Mean+CIHigh) %>%
  mutate(Mean_Prior = Mean,YMin_Prior = YMin, YMax_Prior = YMax) %>%
  mutate(Scenario = fct_reorder(scenario,Mean)) %>%
  arrange(desc(Scenario)) %>%
  cbind(data.frame(topic = c('bell peppers','tomatoes','salad','kale','salmon','notUsed','lipstick','sandals','notUsed','weights','notUsed','freestyle','tulips','gas station','notUsed','ballad','fruit basket','notUsed','perfume','gym','cereal','partner','San Francisco','pottery','ice cream')))

priorsItems$topic = as.factor(as.character(priorsItems$topic))

exhaustivity = exhaustivity %>%
  left_join(priorsItems,by=c('topic'))
  
###VISUALIZATIONS###

# 1. Mean slider response (exhaustivity) in polar and exhaustive QUD conditions (from exhaustivity block)
means = exhaustivity %>%
  group_by(qud) %>%
  summarise(Mean=mean(response),CILow=ci.low(response),CIHigh=ci.high(response)) %>%
  ungroup() %>%
  mutate(YMin=Mean-CILow,YMax=Mean+CIHigh) %>%
  mutate(Mean_New = Mean,YMin_New = YMin, YMax_New = YMax) %>%
  mutate(Qud = fct_reorder(qud,Mean))

means_subj = exhaustivity %>%
  group_by(qud,workerid) %>%
  summarise(Mean=mean(response),CILow=ci.low(response),CIHigh=ci.high(response)) %>%
  ungroup() %>%
  mutate(YMin=Mean-CILow,YMax=Mean+CIHigh) %>%
  mutate(Mean_New = Mean,YMin_New = YMin, YMax_New = YMax) %>%
  mutate(Qud = fct_reorder(qud,Mean))

#plot of mean slider response (with error bars) per QUD
ggplot(means, aes(x=qud,y=Mean)) +
  geom_bar(stat="identity") +
  geom_line(data=means_subj,aes(group=workerid),alpha=.5,color="gray60") +
  geom_errorbar(aes(ymin=YMin,ymax=YMax),width=.25) +
  theme(axis.text.x=element_text(angle=45,hjust=1,vjust=1))
ggsave(file="../graphs/1_critical/mean_slider_qud.png")

ggplot(means_subj, aes(x=qud,y=Mean)) +
  geom_bar(stat="identity") +
  facet_wrap(~workerid) +
  #geom_line(data=means_subj,aes(group=workerid),alpha=.5,color="gray60") +
  geom_errorbar(aes(ymin=YMin,ymax=YMax),width=.25) +
  theme(axis.text.x=element_text(angle=45,hjust=1,vjust=1))
ggsave(file="../graphs/1_critical/mean_slider_qud_subject.png")

#2. Mean proportion of "exhaustive" responses in the polar versus exhaustive QUD (from qud block)
meanExhaustive = qud %>%
  group_by(qud)%>%
  summarise(Proportion = mean(response == 'exhaustive'),CILow=ci.low(response == 'exhaustive'),CIHigh=ci.high(response == 'exhaustive'))%>%
  ungroup() %>%
  mutate(YMin=Proportion-CILow,YMax=Proportion+CIHigh) %>%
  mutate(Proportion_New = Proportion,YMin_New = YMin, YMax_New = YMax) %>%
  mutate(Qud = fct_reorder(qud,Proportion))

ggplot(meanExhaustive, aes(x=Qud,y=Proportion)) +
  geom_bar(stat="identity") +
  geom_errorbar(aes(ymin=YMin,ymax=YMax),width=.25) +
  theme(axis.text.x=element_text(angle=45,hjust=1,vjust=1))
ggsave(file="../graphs/1_critical/exhaustive_proportions.png")


#WE LEFT OFF HERE!!!
# 2*** compute proportion of exhaustive responses by qud
cont_qud = qud %>%
  group_by(topic,qud) %>%
  summarise(ProportionExhaustive = mean(response == 'exhaustive')) %>%
  ungroup()

ggplot(cont_qud,aes(x=ProportionExhaustive,fill=qud))  +
  geom_histogram(position="identity",alpha=.5)
ggsave(file="../graphs/1_critical/exhaustive_proportions_hist.png")


# merge back into exhaustivity
exhaustivity = left_join(exhaustivity,cont_qud,by=c("topic","qud"))

means = exhaustivity %>%
  group_by(ProportionExhaustive,qud) %>%
  summarise(Mean=mean(response),CILow=ci.low(response),CIHigh=ci.high(response))%>%
  ungroup() %>%
  mutate(YMin=Mean-CILow,YMax=Mean+CIHigh)

ggplot(means,aes(x=ProportionExhaustive,y=Mean,color=qud)) +
  geom_point() +
  geom_smooth(method="lm")
ggsave(file="../graphs/1_critical/mean_slider_line.png")


# 3. Mean proportion of "exhaustive" responses in polar versus exhaustive QUD, by subject
meanExhaustive = qud %>%
  group_by(qud,workerid)%>%
  summarise(Proportion = mean(response == 'exhaustive'),CILow=ci.low(response == 'exhaustive'),CIHigh=ci.high(response == 'exhaustive'))%>%
  ungroup() %>%
  mutate(YMin=Proportion-CILow,YMax=Proportion+CIHigh) %>%
  mutate(Proportion_New = Proportion,YMin_New = YMin, YMax_New = YMax) %>%
  mutate(Qud = fct_reorder(qud,Proportion))

ggplot(meanExhaustive, aes(x=Qud,y=Proportion)) +
  geom_bar(stat="identity") +
  facet_wrap(~workerid) +
  geom_errorbar(aes(ymin=YMin,ymax=YMax),width=.25) +
  theme(axis.text.x=element_text(angle=45,hjust=1,vjust=1))
ggsave(file="../graphs/1_critical/exhaustive_proportion_subject.png")

# 4. Mean proportion of "exhaustive" responses in polar versus exhaustive QUD, by item
meanExhaustive = qud %>%
  group_by(qud,topic)%>%
  summarise(Proportion = mean(response == 'exhaustive'),CILow=ci.low(response == 'exhaustive'),CIHigh=ci.high(response == 'exhaustive'))%>%
  ungroup() %>%
  mutate(YMin=Proportion-CILow,YMax=Proportion+CIHigh) %>%
  mutate(Proportion_New = Proportion,YMin_New = YMin, YMax_New = YMax) %>%
  mutate(Qud = fct_reorder(qud,Proportion))

ggplot(meanExhaustive, aes(x=Qud,y=Proportion)) +
  geom_bar(stat="identity") +
  facet_wrap(~topic) +
  geom_errorbar(aes(ymin=YMin,ymax=YMax),width=.25) +
  theme(axis.text.x=element_text(angle=45,hjust=1,vjust=1))
ggsave(file="../graphs/1_critical/exhaustive_proportion_item.png")


# 5. Mean slider response over sensitivity score (each dot is a subject)
means = exhaustivity %>%
  group_by(qud,workerid) %>%
  summarise(Mean = mean(response),CILow=ci.low(response),CIHigh=ci.high(response))%>%
  ungroup() %>%
  mutate(YMin=Mean-CILow,YMax=Mean+CIHigh) %>%
  mutate(Mean_New = Mean,YMin_New = YMin, YMax_New = YMax) %>%
  mutate(Qud = fct_reorder(qud,Mean)) %>%
  right_join(sensitivity,by=c("workerid"))

ggplot(means, aes(x=sensitivityScore,y=Mean,color=Qud)) +
  geom_point() +
  geom_errorbar(aes(ymin=YMin_New,ymax=YMax_New)) + 
  geom_smooth(method='lm')
ggsave(file="../graphs/1_critical/slider_sensitivity_continuous_subject.png")


# 6. Mean slider response over sensitivity score (each dot is an item)
means = exhaustivity %>%
  group_by(qud,topic) %>%
  summarise(Mean = mean(response),CILow=ci.low(response),CIHigh=ci.high(response))%>%
  ungroup() %>%
  mutate(YMin=Mean-CILow,YMax=Mean+CIHigh) %>%
  mutate(Mean_New = Mean,YMin_New = YMin, YMax_New = YMax) %>%
  mutate(Qud = fct_reorder(qud,Mean)) %>%
  right_join(sensitivityItem,by=c("topic"))

ggplot(means, aes(x=sensitivityScoreItem,y=Mean,color=Qud)) +
  geom_point() +
  geom_errorbar(aes(ymin=YMin_New,ymax=YMax_New)) + 
  geom_smooth(method='lm')
ggsave(file="../graphs/1_critical/slider_sensitivity_item.png")


# 7. Slider response over sensitivity score (each dot is a trial)
ggplot(exhaustivity, aes(x=sensitivityScore,y=response,color=qud)) +
  geom_point() +
  geom_smooth(method='lm')
ggsave(file="../graphs/1_critical/slider_sensitivity_trial.png")


# 8. Mean slider response over prior beliefs (each dot is an item)
means = exhaustivity %>%
  group_by(qud,topic) %>%
  summarise(Mean = mean(response),CILow=ci.low(response),CIHigh=ci.high(response))%>%
  ungroup() %>%
  mutate(YMin=Mean-CILow,YMax=Mean+CIHigh) %>%
  mutate(Mean_New = Mean,YMin_New = YMin, YMax_New = YMax) %>%
  mutate(Qud = fct_reorder(qud,Mean)) %>%
  left_join(priorsItems,by=c("topic"))

ggplot(means, aes(x=Mean_Prior,y=Mean_New,color=Qud)) +
  geom_point() +
  geom_errorbar(aes(ymin=YMin_New,ymax=YMax_New)) + 
  geom_errorbarh(aes(xmin=YMin_Prior,xmax=YMax_Prior)) + 
  geom_smooth(method='lm')

# for all continous plot, add different coloring and line of best fit for exhaustive versus polar QUD

### ANALYSIS ###
ad = exhaustivity %>%
     droplevels() %>%
     mutate(Topic = as.factor(as.character(topic))) %>%
     mutate(Prior = as.numeric(as.character(Mean_Prior))) %>%
     mutate(cqud = myCenter(qud), cSensitivity = myCenter(sensitivityScore),cPrior = myCenter(Prior))

nrow(ad)
  
library(lme4)

m = lmer(response ~ cqud * cPrior * cSensitivity + (1 + cqud+cPrior+cSensitivity |Topic) + (1 + cqud+cPrior+cSensitivity|workerid), data=ad)

summary(m)
