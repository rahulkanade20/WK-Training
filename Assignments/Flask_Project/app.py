# from crypt import methods
from flask import Flask, flash, jsonify, request, redirect, url_for, render_template
from flask_cors import CORS

import crud

app = Flask(__name__)

CORS(app)

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        pass
    return render_template('index.html') 

@app.route('/insert', methods=['GET', 'POST'])
def insert():
    if request.method == 'POST':
        
        data = request.form
        name = data.get('name1')
        age = data.get('age')
        address = data.get('addr')
        mobile = data.get('mob')

        crud.insertRecord(name, address, mobile, age)
    
    return render_template('insert.html')

@app.route('/update', methods=['GET', 'POST'])
def update():
    if request.method == 'POST':
        data = request.form
        id = data.get('id1')
        colname = data.get('col')
        value = data.get('val')
        act_col = ""
        if(colname == "Name"):
            act_col = "pName"
        elif(colname == "Age"):
            act_col = "pAge"
        elif(colname == "Address"):
            act_col = "pAddress"
        elif(colname == "Mobile"):
            act_col = "pAddress"

        crud.updateRecord(id, act_col, value)

    return render_template('update.html')

@app.route('/delete', methods=['GET', 'POST'])
def delete():
    if request.method == 'POST':
        data = request.form
        id = data.get('id1')

        crud.deleteRecord(id)
    return render_template('delete.html')
 
@app.route('/display', methods=['GET', 'POST'])
def displayAll():
    headTuple = ("id", "Name", "Age", "Address", "Mobile", "Status")    
    displayTuple = crud.display_all()
    # return displayString
    return render_template('display.html', heading=headTuple, data = displayTuple)


@app.route('/MJS', methods=['GET', 'POST'])
def MJS():

    if(request.method == 'POST'):
        req_data = request.get_json();
        name, age, address, mobile = req_data.values();

    print(name + " " + age + " " + address + " " + mobile)

    crud.insertRecord(name, address, mobile, age)

    return "success"


if __name__ == '__main__':
 
    app.run()