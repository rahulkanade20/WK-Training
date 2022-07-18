# insert delete update display

import sqlite3

def show_menu(conn):
    choice = int(input("Enter 1 to insert\nEnter 2 to update\nEnter 3 to delete\nEnter 4 to display all\n"))

    if(choice == 1):
        insertRecord(conn)
    elif(choice == 2):
        updateRecord(conn)
    elif(choice == 3):
        deleteRecord(conn)
    elif(choice == 4):
        display_all(conn)
    else:
        print("Invalid choice.")

def init_connection():
    try:
        con = sqlite3.connect("./resources/patient_db_one.db")
        return con
    except Exception as e:
        print(e)

def insertRecord(conn):
    
    name = input("Enter name:")
    address = input("Enter address:")
    mobile = input("Enter mobile:")
    age = int(input("Enter age:"))

    query = f"insert into Patients ('pName', 'pAge', 'pAddress', 'pMobile', 'pStatus') values ('{name}', '{address}', '{mobile}', {age}, 'Active')"
    #q = '''insert into Patients('pName', 'pAge', 'pAddress', 'pMobile') values ('abc', 45, 'BR', '89592')'''
    try:
        conn.execute(query)
        conn.commit()
    except Exception as e:
        print(e)

def updateRecord(conn):
    id = int(input("Enter id of the record to be updated:"))
    choice = int(input("Enter 1 to change name\nEnter 2 to change address\nEnter 3 to change mobile\nEnter 4 to change age\n"))

    colName = None

    if(choice == 1):
       value = input("Enter new name:")
       colName= "pName"
    elif(choice == 2):
        value = input("Enter new address:")
        colName = "pAddress"
    elif(choice == 3):
        value = input("Enter mobile:")
        colName = "pMobile"
    elif(choice == 4):
        value = int(input("Enter age:"))
        colName = "pAge"
    else:
        print("Invalid choice.")

    #q = '''update Patients set 'pAge' = 45 where 'pID' = 2'''
    #conn.execute(q)
    #conn.commit()
    q = f"update Patients set {colName} = '{value}' where pID = {id}"
    print(q)
    conn.execute(q)
    conn.commit()

def deleteRecord(conn):
    id = int(input("Enter id of the record to be deleted:"))
    status = "Inactive"
    colName1 = "pStatus"
    colName2 = "pId"
    q = f"update Patients set {colName1} = '{status}' where {colName2} = {id}"
    print(q)
    conn.execute(q)
    conn.commit()

def display_all(conn):
    cursor = conn.execute("select * from Patients")
    for row in cursor:
        print(row)

conn = init_connection()

show_menu(conn)