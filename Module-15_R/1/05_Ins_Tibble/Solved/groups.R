library(tidyverse)
data(diamonds, package='ggplot2')

summarize(diamonds, mean_weight=mean(carat), mean_price=mean(price), total_price=sum(price), num_diamonds=n())


summarize(group_by(diamonds, color, cut), mean_weight=mean(carat), mean_price=mean(price), total_price=sum(price), num_diamonds=n())