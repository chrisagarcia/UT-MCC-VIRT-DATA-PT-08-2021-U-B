n_trials <- 10000
n_rejections <- 0

for (i in 1:n_trials){
  
  sample <- rnorm(1000)
  
  t_result <- t.test(sample, mu=0)
  p_value <- t_result$p.value
  
  if (p_value <= .05){
    n_rejections = n_rejections + 1
  }
  
}

print(n_rejections / n_trials)