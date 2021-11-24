library(tidyverse)
students <- read_csv("../Resources/students.csv")

head(students)

# * A list of all the schools.
unique(students$school_name)

# * The total number of schools.
length(unique(students$school_name))

# * The total number of students.
length(unique(students[["Student ID"]]))
nrow(students)

# * The average reading and math scores.
summarise(students, avg_reading_score=mean(reading_score), avg_math_score=mean(math_score))

# * The percentage of students with passing reading scores, equal to or greater than 70%.
nrow(filter(students, reading_score >= 70)) / nrow(students)


# * The percentage of students with passing math scores, equal to or greater than 70%.
nrow(filter(students, math_score >= 70)) / nrow(students)


# * The percentage of students passing math and reading, i.e., both are equal to or greater than 70%.
nrow(filter(students, reading_score >= 70 & math_score >= 70)) / nrow(students)
