x <- 5
y <- 6
x - y

u <- c(1, 2, 3, 4)
w <- 1:4
v <- seq(2, 8, 2)
u + v - w 

words_vector <- c("hello", "goodbye", "world")
words_list <- list("hello", "goodbye", "world")

for (e in words_vector){
  print(e)
}

for (i in 1:length(words_vector)){
  print(words_vector[i])
}

for (e in words_list){
  print(e)
}

for (i in 1:length(words_list)){
  print(words_list[[i]])
}

for (e in words_vector){
  if (nchar(e) <= 5){
    print(e)
  } else {
    print("TOO LONG")
  }
}

data_list <- list(
  "name"=c("Suki", "Xiu Xui", "Lil' Dood"),
  "age"=c(2, 14, 13)
)

data_list["name"]
data_list$age


