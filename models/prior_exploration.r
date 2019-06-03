library(tidyverse)
library(brms)
library(forcats)
library(stringr)
library(lme4)
library(languageR)
library(ggrepel)
library(jsonlite)


theme_set(theme_bw(18))
source("helpers.r")

# below_one <- fromJSON('below_one.json')
# 
# below_one <- fromJSON('below_one.json')
# one <- fromJSON('one.json')
# above_one <- fromJSON('above_one.json')

d <- fromJSON("../data/models/trained_exh_trials.json")

#d = do.call("rbind", list(below_one, one, above_one))

cor.test(d$model_prob,d$exp_prob)

d = d %>%
  mutate(correlation = cor(l1_prob,exp_prob)) %>%
  group_by(item) %>%
  summarise(Pragmatic_Listener = mean(l1_prob), Literal_Listener = mean(l0_prob), Human_Participants = mean(exp_prob),Prior=mean(prior))%>%
  ungroup() %>%
  gather(preds_source, prob, Pragmatic_Listener, Literal_Listener, Human_Participants)




#%>%
  # filter(qud == 'exhaustive') %>%
  # group_by(alpha) %>%
  # mutate(correlation = cor(d$ex)) 

ggplot(d, aes(x=Prior,y=prob,color=preds_source)) +
  geom_point() +
  geom_smooth(method='lm') + 
  theme(axis.title=element_text(size=10,face="bold"),legend.title=element_text(size=10,face="bold"),legend.text=element_text(size=10)) + 
  labs(x = 'Prior probability of exhaustivity',y = 'Posterior probability of exhaustivity',color='Source of prediction')
ggsave("../graphs/exp_model_probs.png",height=7,width=10)

#look for R^2, r, MSE, goodness of fit measures 

#uniform param prior for alpha between 0 and 10 

#literal listener with uniform prior or empiriclly elicited prior 
#BDA to infer alpha 
#re-generate plots with costs for kale_else and nothing else 
#create bounds for costs: assume 4 different costs (start with alpha)

model_probs = d %>%
  filter(preds_source == 'model_prob')

model_probs$item = as.factor(as.character(model_probs$item))
model_probs$qud = as.factor(as.character(model_probs$qud))

ggplot(model_probs, aes(x=prior,y=prob), cex=2) +
  geom_point() +
  geom_text(aes(label=item),angle=45,hjust=1,vjust=1) +
  geom_smooth(method='lm') + 
  theme(axis.title=element_text(size=10,face="bold")) + 
  labs(x = 'Prior probability of exhaustivity',y = 'Model-predicted probability of exhaustivity',color='QUD')
ggsave("../graphs/model_probs.png",height=7,width=10)
