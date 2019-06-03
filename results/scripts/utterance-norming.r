library(tidyverse)
library(brms)
library(forcats)
library(stringr)
library(lme4)
library(languageR)
library(ggrepel)

theme_set(theme_bw(18))
source("helpers.r")

d = read.table(file="../data/1_norm/experiment.csv",sep=",", header=T)
d = as.data.frame(lapply(d, function(x) {gsub('\"',"",x)}))

d2 = read.table(file="../data/1_norm/experiment2.csv",sep=",", header=T)
d2 = as.data.frame(lapply(d2, function(x) {gsub('\"',"",x)}))

#correct priors found here 
priors = read.table(file="../data/1_norm/priorsItems.csv",sep=",", header=T)
priors = as.data.frame(lapply(priors, function(x) {gsub('\"',"",x)}))

#hard-coded filtering for participants who reported a native language other than English --> cut out 2 participants 
# d = d %>%
#    filter(language != 'russian' & language != 'urdu') %>%
#    droplevels()

#basic tenets of the dataset
head(d)
nrow(d)
summary(d)

d$Trial = as.numeric(as.character(d$slide_number)) - 2
d$Answer.time_in_minutes = as.numeric(as.character(d$Answer.time_in_minutes))
d$age = as.numeric(as.character(d$age))
d$response = as.numeric(as.character(d$response))

d2$Trial = as.numeric(as.character(d2$slide_number)) - 2
d2$Answer.time_in_minutes = as.numeric(as.character(d2$Answer.time_in_minutes))
d2$age = as.numeric(as.character(d2$age))
d2$response = as.numeric(as.character(d2$response))

priors$YMin_Prior = as.numeric(as.character(priors$YMin_Prior))
priors$YMax_Prior = as.numeric(as.character(priors$YMax_Prior))
priors$Mean_Prior = as.numeric(as.character(priors$Mean_Prior))
#d$response_other = as.numeric(as.character(d$response_other))

#N = 158
length(unique(d$workerid))

# # look at turker comments
unique(d$comments)
# 
summary(d$Answer.time_in_minutes)

#plot of full range of response times (for whole experiment in minutes) by trial not by participant
ggplot(d, aes(Answer.time_in_minutes)) +
   geom_histogram()
ggsave(file="../graphs/answer_time_in_minutes.png")

#gender breakdown of trials (not by participant)
ggplot(d, aes(gender)) +
   stat_count()
ggsave(file="../graphs/participant_gender.png")

#did they understand the HIT?
ggplot(d, aes(asses)) +
   stat_count()
ggsave(file="../graphs/participant_understood_task.png")

# age by trial
ggplot(d, aes(age)) +
   geom_histogram()
ggsave(file="../graphs/age_by_trial.png")

table(d$age)

#education by trial 
ggplot(d, aes(education)) +
   stat_count()
ggsave(file="../graphs/education_by_trial.png")

#language
ggplot(d, aes(language)) +
   stat_count() +
   theme(axis.text.x=element_text(angle=45,hjust=1,vjust=1))
# 
ggplot(d, aes(enjoyment)) +
  stat_count()

#getting all critical qud manipulation trials
norm = d %>%
   filter(block == "stim_norming") %>%
    filter(workerid != '4' & workerid != '18' & workerid != '19' & workerid != '27' & workerid != '29')%>%
  mutate(responseNew = 1 - response) %>%
   droplevels()

prevnorm = d2 %>%
  filter(block == "stim_norming") %>%
  filter(workerid != '13')%>%
  mutate(responseNew = 1 - response) %>%
  droplevels()

means1 = norm %>%
  group_by(scenario) %>%
  summarise(Mean=mean(responseNew),CILow=ci.low(responseNew),CIHigh=ci.high(responseNew)) %>%
  ungroup() %>%
  mutate(YMin=Mean-CILow,YMax=Mean+CIHigh) %>%
  mutate(Mean_New = Mean,YMin_New = YMin, YMax_New = YMax) %>%
  mutate(Scenario = fct_reorder(scenario,Mean))

means2 = prevnorm %>%
  group_by(scenario) %>%
  summarise(Mean=mean(responseNew),CILow=ci.low(responseNew),CIHigh=ci.high(responseNew)) %>%
  ungroup() %>%
  mutate(YMin=Mean-CILow,YMax=Mean+CIHigh) %>%
  mutate(Mean_Old = Mean,YMin_Old = YMin, YMax_Old = YMax) %>%
  mutate(Scenario = fct_reorder(scenario,Mean))

meansBoth = inner_join(means1 %>% select(Scenario,Mean_New,YMin_New, YMax_New), means2 %>% select(Scenario,Mean_Old,YMin_Old, YMax_Old),by=c("Scenario"))

cor(meansBoth$Mean_New, meansBoth$Mean_Old)

ggplot(meansBoth, aes(x=Mean_Old,y=Mean_New)) +
   geom_point() +
   geom_errorbar(aes(ymin=YMin_New,ymax=YMax_New)) + 
  geom_errorbarh(aes(xmin=YMin_Old,xmax=YMax_Old)) +
  geom_text_repel(aes(label = Scenario),color='lightblue') +
  geom_abline(intercept=0,slope=1,color='gray50')
  
  
ggplot(norm, aes(responseNew)) + 
  geom_histogram() + 
   facet_wrap(~scenario) + 
  # theme(strip.text = element_text(face="bold", size=9,lineheight=5.0),strip.background = element_rect(fill="lightblue", colour="black",size=1))+ 
  # geom_density() +
  geom_vline(data=means,aes(xintercept=Mean),color="red")

ggplot(norm, aes(responseNew)) + 
  geom_histogram() + 
  facet_wrap(~workerid) + 
  theme(strip.text = element_text(face="bold", size=9,lineheight=5.0),strip.background = element_rect(fill="lightblue", colour="black",size=1))

ggplot(means1, aes(x=Scenario,y=Mean)) +
  geom_bar(stat="identity") +
  geom_errorbar(aes(ymin=YMin,ymax=YMax),width=.25) +
  theme(axis.text.x=element_text(angle=45,hjust=1,vjust=1)) 
ggsave("../graphs/means.png",height=8,width=12)

priors = priors %>%
  mutate(Scenario = str_replace(Scenario,"&quotechars", "'s")) %>%
  mutate(Scenario = fct_reorder(Scenario,Mean_Prior))

ggplot(priors, aes(x=Scenario,y=Mean_Prior)) +
  geom_bar(stat="identity") +
  geom_errorbar(aes(ymin=YMin_Prior,ymax=YMax_Prior),width=.25) +
  theme(axis.title=element_text(size=12,face="bold")) + 
  labs(x = 'Critical Scenario', y = 'Prior probability of exhaustivity') + 
  coord_flip()
ggsave("../graphs/1_norm/priors.png",width=8.5, height=11)

all = rbind(norm,prevnorm)

allMeans = all %>%
  group_by(scenario) %>%
  summarise(Mean=mean(responseNew),CILow=ci.low(responseNew),CIHigh=ci.high(responseNew)) %>%
  ungroup() %>%
  mutate(YMin=Mean-CILow,YMax=Mean+CIHigh) %>%
  mutate(Scenario = fct_reorder(scenario,Mean))

ggplot(allMeans, aes(x=Scenario,y=Mean)) +
  geom_bar(stat="identity") +
  geom_errorbar(aes(ymin=YMin,ymax=YMax),width=.25) +
  theme(axis.text.x=element_text(angle=60,hjust=1,vjust=1,size=7))
ggsave("../graphs/means_norm.png",width=11)


