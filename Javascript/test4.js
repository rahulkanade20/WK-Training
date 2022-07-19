// using spread for objects

// person1 = person2 ... only references both point to same object

const person = {

    firstName:"abc",
    lastName:"def",
    age:18
};

console.log(person);

const person2 = { ...person}

console.log(person2);

person2.age = 20;

console.log(person);
console.log(person2);

// spread and rest operators with objects to make copy of objects

// person and person2 are separate objects now and not references of each other

// adding attributes of existing objects and adding new ones using spread operator

// rest operators example

const {...person3} = person

console.log(person);
console.log(person3);

// variable number of parameters using rest operators

// combining rest and spread in java use spread to pass all elements of array

// mandatory and optional parameters

// try all this

// function with default parameters in javascript , higher order functions in javascript

// event handling

// call apply bind functions

function callMe() {

    console.log(this);
}

callMe();

const emp = {

    name:"abc",
    age: 30,

    display: function () {
        console.log(this);
    }
}

//emp.display();

const emp1 = emp.display;
emp1(); // lost reference to the object emp

// code apply bind example ... watch video again

// prototyping in javascript

// .call() method explicitely allows you to set first parameter to any object that you use

// .apply method

// after lecture

foo(1,2,3);

function foo(mandatory, ...list_) {

    console.log(mandatory);
    
    for(i = 0; i<list_.length; i++) {

        console.log(list_[i]);
    }
}


// higher order functions in javascript
// a function which accepts other functions as input or output or return other higher functions

function foo1(ele) {

    console.log(ele);
}

list_ = [8,9,10];

list_.forEach(foo1);

function foo2() {

    return function () {

        console.log("returning a function");
    }; 
}

func_expr = foo2();

func_expr();

function foo5(id1=100, id2="hello", id3 = 50) {

    console.log("---")
    console.log(id1);
    console.log(id2);
    console.log(id3);
}

foo5(1,2,3);
foo5(1,2);
foo5(1);
foo5();

// call , apply , bind

printFullName = function (hometown, state) {

    console.log(this.firstName + " " + this.lastName + " from " + hometown + " in " + state);
}

let name1 = {

    firstName: "abc",
    lastName: "def",
}

printFullName.call(name1, "ijk", "maharashtra");

let name2 = {

    firstName: "sachine",
    lastName: "tendulkar"
}

// function borrowing

printFullName.call(name2, "lmn", "goa");

// apply method is same as call only after the reference the other parameters that we pass to 
// the function is passed as a list eg. printFullName.call(name2, ["lmn", "goa"]);


// bind method

let printMyName = printFullName.bind(name2, "lmn", "goa"); // returns a method

printMyName();