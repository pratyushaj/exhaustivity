# nameOfExpt from post_batches.sh
expt <- "experiment"

# total number of subjects
n_subj <- 30
# number of subjects per batch
n_per_batch <- 6

# path to mturk folder
path.to.mturk.folder <- "/Users/pratyushaj/projects/exhaustivity/experiments/1_norm/mturk/"
dirpath <- path.to.mturk.folder


num_round_dirs <- floor(n_subj/n_per_batch)
leftover <- n_subj - num_round_dirs*n_per_batch
rounds <- seq(1, num_round_dirs, 1)


## Merge invoices
invoice<-data.frame()

for (i in rounds){
  print(i)
  inv<-read.csv(paste(dirpath, "round", i, '/', expt,"_invoice.csv", sep=""))
  invoice<-bind_rows(invoice,inv[1:n_per_batch,])
}

# leftover (last "incomplete batch")
inv <- read.csv(paste(dirpath, "round", num_round_dirs+1, '/', expt,"_invoice.csv", sep=""))
invoice <- bind_rows(invoice, inv[1:leftover,])

write.csv(invoice, paste(dirpath, expt, "-totalinvoice.csv", sep="") )


## Merge data sets

df = do.call(rbind, lapply(1:(num_round_dirs), function(i) {
  print(i)
  return (read.csv(paste(dirpath,
                         'round', i, '/', expt, '.csv', sep='')) %>%
            mutate(workerid = (workerid + (i-1)*n_per_batch)))}))

write.csv(df,
          paste(dirpath, expt, "-trials.csv", sep=""),
          row.names=F)


## Merge subject info
df = do.call(rbind, lapply(1:(num_round_dirs+1), function(i) {
  return (read.csv(paste(dirpath,
                         'round', i, '/',expt,'-subject_information.csv', sep='')) %>%
            mutate(workerid = (workerid + (i-1)*n_per_batch)))}))

write.csv(df,
          paste(dirpath, expt, "-subject_information.csv", sep=""),
          row.names=F)


## merge Catch trial info
df = do.call(rbind, lapply(1:(num_round_dirs+1), function(i) {
  return (read.csv(paste(dirpath,
                         'round', i, '/',expt,'-catch_trials.csv', sep='')) %>%
            mutate(workerid = (workerid + (i-1)*n_per_batch)))}))

write.csv(df,
          paste(dirpath, expt, "-catch_trials.csv", sep=""),
          row.names=F)
