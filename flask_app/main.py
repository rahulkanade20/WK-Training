# Importing flask module in the project is mandatory
# An object of Flask class is our WSGI application.
from pickle import GET
from flask import Flask, jsonify
 
# Flask constructor takes the name of
# current module (__name__) as argument.
app = Flask(__name__)
 
# The route() function of the Flask class is a decorator,
# which tells the application which URL should call
# the associated function.
@app.route('/', methods = ['GET'])
# ‘/’ URL is bound with hello_world() function.
def hello_world():
    """GET in server"""
    response = jsonify(message="Simple server is running")

    # Enable Access-Control-Allow-Origin
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
 
# main driver function
if __name__ == '__main__':
 
    # run() method of Flask class runs the application
    # on the local development server.
    app.run(host="127.0.0.1", port="5000", debug=True)