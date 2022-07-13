patient_dobs = ['21-02-1981', '03-02-2006', '12-01-1950']

curr_year = 2022

#print("hello")

def get_yob(dobs):

    yobs = []

    for dob in dobs:
        yobs.append(int(dob.split("-")[2]))

    return yobs

def get_ages(yobs):
    ages = []

    for y in yobs:
        ages.append(2022 - y)

    return ages

def get_patient_status(get_yob, get_ages, dobs):

    major = []

    yobs = get_yob(dobs)
    ages = get_ages(yobs)

    for a in ages:
        if a >= 18:
            major.append(a)
    
    return major

print(get_patient_status(get_yob, get_ages, patient_dobs))
