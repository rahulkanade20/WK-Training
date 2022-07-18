# insert delete update display

import csv

csv_cols = ["patient_id","firstName","lastName","gender","age"]

def show_menu():
    choice = int(input("Enter 1 to insert\nEnter 2 to update\nEnter 3 to delete\nEnter 4 to display all\n"))

    if(choice == 1):
        insertRecord()
    elif(choice == 2):
        updateRecord()
    elif(choice == 3):
        deleteRecord()
    elif(choice == 4):
        display_all()
    else:
        print("Invalid choice.")


def load_data():
    pdata = {}
    pdata["patients_list"] = []
    with open('./resources/patient_data.csv') as csv_file:
        csv_file = csv.DictReader(csv_file)
        for row in csv_file:
            # print(row)
            pdata["patients_list"].append(row)
        return pdata


def save_data(pdata):
    with open("./resources/patient_data.csv", 'w') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=csv_cols)
        writer.writeheader()
        for data in pdata["patients_list"]:
            writer.writerow(data)


def display_all():
    csv_res = load_data()
    for item in csv_res.items():
        print(item)

def insertRecord():
    id = int(input("Enter id:"))
    fname = input("Enter first name:")
    lname = input("Enter last name:")
    gender = input("Enter gender:")
    age = int(input("Enter age:"))

    csv_res = load_data()

    temp_dict = {}

    temp_dict["patient_id"] = id
    temp_dict["firstName"] = fname
    temp_dict["lastName"] = lname
    temp_dict["gender"] = gender
    temp_dict["age"] = age

    csv_res["patients_list"].append(temp_dict)

    save_data(csv_res)


def deleteRecord():
    id = int(input("Enter id of the record to be deleted:"))
    csv_res = load_data()

    list_ = csv_res["patients_list"]
    
    for i in range(len(list_)):
        temp_dict = list_[i]
        if(int(temp_dict["patient_id"]) == id):
            list_.pop(i)
            break
        else:
            continue
    
    save_data(csv_res)


def updateRecord():
    id = int(input("Enter id of the record to be updated:"))
    choice = int(input("Enter 1 to change first name\nEnter 2 to change last name\nEnter 3 to change gender\nEnter 4 to change age\n"))

    key = None

    if(choice == 1):
       value = input("Enter new first name:")
       key = "firstName"
    elif(choice == 2):
        value = input("Enter new last name:")
        key = "lastName"
    elif(choice == 3):
        value = input("Enter gender:")
        key = "gender"
    elif(choice == 4):
        value = int(input("Enter age:"))
        key = "age"
    else:
        print("Invalid choice.")

    csv_res = load_data()

    list_ = csv_res["patients_list"]
    
    for i in range(len(list_)):
        temp_dict = list_[i]
        if(int(temp_dict["patient_id"]) == id):
            temp_dict[key] = value
            break
        else:
            continue
    
    save_data(csv_res)

show_menu()