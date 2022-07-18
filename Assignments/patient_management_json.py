# insert delete update display

import json

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
    with open("./resources/patient_data.json", "r") as json_file_handle:
        json_data = json.load(json_file_handle)
    return json_data

def save_data(pdata):
    with open("./resources/patient_data.json", 'w') as json_file_handle:
        json.dump(pdata, json_file_handle, indent=8)

def display_all():
    json_res = load_data()
    for item in json_res.items():
        print(item)

def insertRecord():
    id = int(input("Enter id:"))
    fname = input("Enter first name:")
    lname = input("Enter last name:")
    gender = input("Enter gender:")
    age = int(input("Enter age:"))

    json_res = load_data()

    temp_dict = {}

    temp_dict["patient_id"] = id
    temp_dict["firstName"] = fname
    temp_dict["lastName"] = lname
    temp_dict["gender"] = gender
    temp_dict["age"] = age

    json_res["patients_list"].append(temp_dict)

    save_data(json_res)

def deleteRecord():
    id = int(input("Enter id of the record to be deleted:"))
    json_res = load_data()

    list_ = json_res["patients_list"]
    
    for i in range(len(list_)):
        temp_dict = list_[i]
        if(int(temp_dict["patient_id"]) == id):
            list_.pop(i)
            break
        else:
            continue
    
    save_data(json_res)

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

    json_res = load_data()

    list_ = json_res["patients_list"]
    
    for i in range(len(list_)):
        temp_dict = list_[i]
        if(int(temp_dict["patient_id"]) == id):
            temp_dict[key] = value
            break
        else:
            continue
    
    save_data(json_res)
    
show_menu()

