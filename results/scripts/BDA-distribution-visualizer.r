library(tidyverse)
library(brms)
library(forcats)
library(stringr)
library(lme4)
library(languageR)
library(ggrepel)

theme_set(theme_bw(18))
source("helpers.r")

d = read.table(file="../data/models/alpha-exh-trials-within-1.csv",sep=",", header=T)
# d = read.table(file="../data/1_critical/pilot.csv",sep=",", header=T)
d = as.data.frame(lapply(d, function(x) {gsub('\"',"",x)}))

d$alpha = as.numeric(as.character(d$alpha))
d$probability = as.numeric(as.character(d$probability))

ggplot(d, aes(x=alpha,y=probability)) +
  geom_bar(stat="identity")

ggplot(d, aes(x=alpha,y=probability)) +
  geom_point() +
  geom_smooth()

ggplot(d, aes(x=alpha)) + 
  geom_histogram(aes(y=..density..))+
  geom_density(aes(y=..density..)) + 
  theme(axis.title=element_text(size=10,face="bold"),legend.title=element_text(size=10,face="bold"),legend.text=element_text(size=10)) + 
  labs(x = 'Posterior value of alpha',y = 'Density',color='Source of prediction')
#ggsave("../graphs/alpha_posterior_means.png",height=7,width=5)

ggplot(d, aes(x=alpha)) + 
  geom_density() + 
  theme(axis.title=element_text(size=10,face="bold"),legend.title=element_text(size=10,face="bold"),legend.text=element_text(size=10)) + 
  labs(x = 'Posterior value of alpha',y = 'Density',color='Source of prediction')
ggsave("../graphs/alpha_posterior_means.png",height=7,width=5)
