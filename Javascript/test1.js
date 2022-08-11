// chrome engine acts as a interpreter for javascript
// at heart of node js is this chrome engine which interpretes javascript and other things added like 
// npm which consists of large 3rd party library for node js javascript
// wsl windows subsystem for linux
// python and javascript are not type safe languages ... to solve this javascript has come up with type script
// bigint in javascript 2^53-1
console.log("hello")

x = 5;
y = 10;
console.log(x+y);
console.log(typeof x);

var person = {

    name: "abc",
    age: 2091
}

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person["name"])
console.log(person["age"])

if(true) {
    console.log("true")
}
else {
    console.log("false")
}


// loops in javascript
// different string methods in javascript
// .length to find length of the string


// string template literals

name1 = "def"

let sen = `The name is ${name1}`

console.log(sen)

let a = '5';

let b = 9;

console.log(a+b) // 59 is printed, coersion

function setVal() {

    document.getElementById("in1").value = "xyz value"
    alert("hi")
}

function displayOnClick() {

    var t1 = document.getElementById("input1")

}

// closure in javascript is same like closure discussed in python

// elements and events and event handlers in javascript , arrays method in javascript

// type converion and coercion

const value1 = '7';
const value2 = 9;
let sum = value1 + value2; // prints 79 implicit conversion into string, coercion
console.log(sum);

sum = Number(value1) + value2; // prints 16 type conversion
console.log(sum);


// truthy values and falsy values in javascript

// 0 '' undefined null NaN ... these 5 return false , else return true

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// == and === equality in javascript

console.log("9" == 9); // true
console.log("9" === 9); // false