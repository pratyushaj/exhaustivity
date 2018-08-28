# nameOfExpt from post_batches.sh
expt <- "pilot-2"

# total number of subjects
n_subj <- 120
# number of subjects per batch
n_per_batch <- 9

# path to mturk folder
path.to.mturk.folder <- "~/Documents/research/myProject/expt/mturk/"
dirpath <- paste(path.to.mturk.folder, expt, sep="")


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

df = do.call(rbind, lapply(1:(num_round_dirs+1), function(i) {
  print(i)
  return (read.csv(paste(dirpath,
    'round', i, '/', expt, '-trials.csv', sep='')) %>%
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


