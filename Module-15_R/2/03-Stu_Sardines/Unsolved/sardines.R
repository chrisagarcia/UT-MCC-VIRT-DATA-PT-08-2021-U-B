data <- read_csv("../Resources/sardines.csv")
unique(data$location)

sample_location_1 <- subset(data, location == 1)$vertebrae
sample_location_2 <- subset(data, location == 2)$vertebrae

hist(sample_location_1)
hist(sample_location_2)

t.test(sample_location_1, sample_location_2)

boxplot(vertebrae ~ location, data=data)

summary(aov(vertebrae ~ location, data=data))

summary(lm(vertebrae ~ location, data=data))


