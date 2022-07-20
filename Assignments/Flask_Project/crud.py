# insert delete update display

import sqlite3

def init_connection():
    try:
        con = sqlite3.connect("./resources/patient_db_one.db")
        return con
    except Exception as e:
        print(e)

def insertRecord(name, address, mobile, age):
    
    conn = init_connection()

    query = f"insert into Patients ('pName', 'pAge', 'pAddress', 'pMobile', 'pStatus') values ('{name}', '{age}', '{address}', {mobile}, 'Active')"
    #q = '''insert into Patients('pName', 'pAge', 'pAddress', 'pMobile') values ('abc', 45, 'BR', '89592')'''
    try:
        conn.execute(query)
        conn.commit()
    except Exception as e:
        print(e)

def updateRecord(id, field, value):
    # id = int(input("Enter id of the record to be updated:"))
    # choice = int(input("Enter 1 to change name\nEnter 2 to change address\nEnter 3 to change mobile\nEnter 4 to change age\n"))

    # colName = None

    # if(choice == 1):
    #    value = input("Enter new name:")
    #    colName= "pName"
    # elif(choice == 2):
    #     value = input("Enter new address:")
    #     colName = "pAddress"
    # elif(choice == 3):
    #     value = input("Enter mobile:")
    #     colName = "pMobile"
    # elif(choice == 4):
    #     value = int(input("Enter age:"))
    #     colName = "pAge"
    # else:
    #     print("Invalid choice.")

    #q = '''update Patients set 'pAge' = 45 where 'pID' = 2'''
    #conn.execute(q)
    #conn.commit()
    conn = init_connection()

    q = f"update Patients set {field} = '{value}' where pID = {id}"
    print(q)
    conn.execute(q)
    conn.commit()

def deleteRecord(id):

    conn = init_connection()

    # id = int(input("Enter id of the record to be deleted:"))
    status = "Inactive"
    colName1 = "pStatus"
    colName2 = "pId"
    q = f"update Patients set {colName1} = '{status}' where {colName2} = {id}"
    print(q)
    conn.execute(q)
    conn.commit()

def display_all():
    
    conn = init_connection()
    displayS = ""
    cursor = conn.execute("select * from Patients")
    for row in cursor:
        print(row)
        displayS = displayS + str(row) + '\n'

    print(displayS)
    return displayS
