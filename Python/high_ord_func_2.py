# map filter reduce

from functools import reduce

patient_dobs = ['21-02-1981', '03-02-2006', '12-01-1950']

curr_year = 2022

def get_yob(dob):
    return int(dob.split("-")[2])

def get_ages(yob):
   return curr_year - yob

def get_adult_status(age):
    return age >= 18

yobs = list(map(get_yob, patient_dobs))
print(yobs)

ages = list(map(get_ages, yobs))
print(ages)

status = list(filter(get_adult_status, ages))
print(status)

def add(age1, age2):
    return age1+age2

add1 = lambda a1 , a2 : a1 + a2

print(reduce(add1, ages)/len(ages))

# nameless or anonymous functions 

status = lambda age: age>=18
print(status(43))

def marks_and_avg_func():
    marks = [81, 82, 83, 84, 85]

    return marks, lambda m : sum(m)/len(m)

marks_list , func_avg = marks_and_avg_func

print("Answer is " + func_avg(marks_list))

#def get_patient_status(get_yob, get_ages, dobs):


#print(get_patient_status(get_yob, get_ages, patient_dobs))
