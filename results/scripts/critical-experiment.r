library(tidyverse)
library(brms)
library(forcats)
library(stringr)
library(lme4)
library(languageR)
library(ggrepel)

theme_set(theme_bw(18))
source("helpers.r")

d = read.table(file="../data/1_critical/pilot.csv",sep=",", header=T)
d = as.data.frame(lapply(d, function(x) {gsub('\"',"",x)}))

priors = read.table(file="../data/1_norm/experiment-trials.csv",sep=",", header=T)
priors = as.data.frame(lapply(priors, function(x) {gsub('\"',"",x)}))

#basic tenets of the dataset
head(d)
nrow(d)
summary(d)

d$Trial = as.numeric(as.character(d$slide_number)) - 2
d$Answer.time_in_minutes = as.numeric(as.character(d$Answer.time_in_minutes))
d$age = as.numeric(as.character(d$age))
d$topic = as.factor(as.character(d$topic))

priors$response = as.numeric(as.character(priors$response))

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

#Exclusion criterion 1: response time more than 2 sd's away from mean completion time
#Exclusion criterion 2: Slider responses not close enough to the (clearly) correct side in exh block 
#Exclusion criterion 3: Incorrect MC response in qud block to 2 attention checks 
fails = d %>%
  filter((abs(Answer.time_in_minutes-mean(d$Answer.time_in_minutes)) > (2*sd(d$Answer.time_in_minutes))) | (block == 'exhaustivity' & trial_type == "filler" & qud == "exhaustive" & as.numeric(as.character(response)) < 0.9) | (block == 'exhaustivity' & trial_type == "filler" & qud == "polar" & as.numeric(as.character(response)) > 0.1) | (block == 'qud_assessment' & trial_type == "filler" & qud == "exhaustive" & response != 'exhaustive') | (block == 'qud_assessment' &trial_type == "filler" & qud == "polar" & response != 'polar'))%>%
  droplevels()

#filtering the failures
d = d %>%
  filter(workerid %in% fails$workerid == FALSE) %>%
  droplevels()

# exhaustivity block critical trials  
exhaustivity = d %>%
  filter(block == 'exhaustivity') %>%
  filter(trial_type == 'critical')%>%
  droplevels()

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
priorsItems = priors %>%
  group_by(scenario) %>%
  summarise(Mean=mean(response),CILow=ci.low(response),CIHigh=ci.high(response)) %>%
  ungroup() %>%
  mutate(YMin=Mean-CILow,YMax=Mean+CIHigh) %>%
  mutate(Mean_Prior = Mean,YMin_Prior = YMin, YMax_Prior = YMax) %>%
  mutate(Scenario = fct_reorder(scenario,Mean)) %>%
  cbind(data.frame(topic = c('kale','New York','notUsed','sandals','salmon','Chicago','notUsed','salad','cereal','pottery','lipstick','notUsed','perfume','gym','gas station','mojito','ice cream','weights','tomatoes','Twister','tulips','bell peppers','fruit basket','ballad','partner','freestyle','San Francisco','notUsed','notUsed')))

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

#plot of mean slider response (with error bars) per QUD
ggplot(means, aes(x=qud,y=Mean)) +
  geom_bar(stat="identity") +
  geom_errorbar(aes(ymin=YMin,ymax=YMax),width=.25) +
  theme(axis.text.x=element_text(angle=45,hjust=1,vjust=1)) 

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

# 7. Slider response over sensitivity score (each dot is a trial)
ggplot(exhaustivity, aes(x=sensitivityScore,y=response,color=Qud)) +
  geom_point() +
  geom_errorbar(aes(ymin=YMin_New,ymax=YMax_New)) + 
  geom_smooth(method='lm')

# 8. Mean slider response over prior beliefs (each dot is an item)
means = exhaustivity %>%
  group_by(qud,topic) %>%
  summarise(Mean = mean(response),CILow=ci.low(response),CIHigh=ci.high(response))%>%
  ungroup() %>%
  mutate(YMin=Mean-CILow,YMax=Mean+CIHigh) %>%
  mutate(Mean_New = Mean,YMin_New = YMin, YMax_New = YMax) %>%
  mutate(Qud = fct_reorder(qud,Mean)) %>%
  left_join(priors,by=c("topic"))

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
     mutate(cqud = myCenter(qud), cSensitivity = myCenter(sensitivityScore),cPrior = myCenter(Mean_Prior))

nrow(ad)
  
library(lme4)

m = lmer(response ~ cqud * cPrior * cSensitivity + (1 + cqud*cPrior*cSensitivity |Topic) + (1 + cqud*cPrior*cSensitivity|workerid), data=ad)

summary(m)
