library(tidyverse)
library(brms)
library(forcats)
library(stringr)
library(lme4)
library(languageR)
library(ggrepel)


# Setting theme for visualizations and adding Judith's helper functions file

theme_set(theme_bw(18))
source("helpers.r")


# Reading in the data from the critical experiment and the norming experiment where prior beliefs were collected

d0 = read.table(file="../data/1_critical/experiment3.csv",sep=",", header=T)
d0$workerid = d0$workerid + 700
d1 = read.table(file="../data/1_critical/experiment1.csv",sep=",", header=T)
d1$workerid = d1$workerid + 300
d2 = read.table(file="../data/1_critical/experiment2.csv",sep=",", header=T)
d = do.call("rbind", list(d0, d1, d2))
#d = read.table(file="../data/1_critical/pilot.csv",sep=",", header=T)
#d = as.data.frame(lapply(d, function(x) {gsub('\"',"",x)}))
priors = read.table(file="../data/1_norm/experiment2.csv",sep=",", header=T)
priors = as.data.frame(lapply(priors, function(x) {gsub('\"',"",x)}))

# Ensuring that different variables are correctly assigned as factors, numbers, and strings


d$Trial = as.numeric(as.character(d$slide_number)) - 3
d$Answer.time_in_minutes = as.numeric(as.character(d$Answer.time_in_minutes))
d$age = as.numeric(as.character(d$age))
d$topic = as.factor(as.character(d$topic))
d$slide_number = as.numeric(as.character(d$slide_number))


priors$response = as.numeric(as.character(priors$response))


# Adding the block number via reverse engineering - block_number is 1 if it is the first of the blocks, 2 otherwise

d = d %>%
  group_by(workerid) %>%
  mutate(block_num = case_when (
    slide_number > 3 & slide_number < 36 & block == 'exhaustivity' & first(block) == 'exhaustivity' ~ 1,
    slide_number > 3 & slide_number < 16 & block == 'qud_assessment' & first(block) == 'qud_assessment' ~ 1,
    slide_number > 36 & slide_number < 49 & block == 'qud_assessment' & last(block) == 'qud_assessment' ~ 2,
    slide_number > 16 & slide_number < 49 & block == 'exhaustivity' & last(block) == 'exhaustivity' ~ 2)) %>%
  ungroup()

fails0 = d %>%
  filter(language == 'Urdu' | language == 'Italian' | language == 'Spanish' | language == 'Other') %>%
  droplevels()
