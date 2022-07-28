// try out flat and flat map in javascript
// there is a depth upto which flat() happens and not beyond it
// .flat(2) ---> flat upto level 2
// returns a new array original is intact

// flatmap method - map is applied first then flat is applied


// OOPS in javascript - 
// concept of prototypes
// objname.__proto__ // works only in browsers
// protoype chain refer photo
// per1.hasOwnProperty('name')
// per1.isPrototypeof(Object
//protoypal inheritance

//objects can be created using following ways - 
// constructor functions , ES6 classes , Object.create() method

// constructor functions , 
// static variables with constructors directly adding attributes
// student.prototype.nationality = wwgwg
// student.nationality = static in nature

// object.create() always creates a blank object attaches a prototyp with a properties of prototype

// read about prototype chain and prototype inheritance

// ES6 classes - 
// we can pass classes and return classes from functions
// instance and static methods

// classes actual practical

class Person {

    #age; // private attribute
    constructor(firstName, lastName, yearOfBirth) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
    }

    calcAge = function () {

        return 2022 - this.yearOfBirth;
    }

    setAge(yob) {

        this.yearOfBirth = yob
    }

    set personAge(age) { // property

        this.#age = age;
    }
}

const p1 = new Person("abcd", "efgh", 2018);

console.log(p1.firstName);
console.log(p1.lastName);
console.log(p1.yearOfBirth);

p1.yearOfBirth = 2017;

console.log(p1.firstName);
console.log(p1.lastName);
console.log(p1.yearOfBirth);

console.log(p1.calcAge());

age = 90;

// private attribute age example
// set age , get name example 
// getters and setters are available with object literals also
// achieving abstraction through getters and setters
// static methods/attributes in classes
// classes can only extend a single class in javascript | multiple inheritance not supported in javascript
// # can be used to create private attributes or private methods

class Per {

    static species = "Human";

    constructor(name, age) {

        this.name = name;
        this.age = age;
    }

    static greet() {
        
        console.log("hello");
    }
}

p10 = new Per("abc", 88);

console.log(Per.species);
console.log(Per.greet());
// console.log(p10.greet());

// after lectures

console.log("----------------------------------------------------------")

// flat method - 

let arr = [1,2,3,[4,5],[6,7,[8,9]]];

let arr1 = arr.flat(0);

console.log(arr1);

let arr2 = arr.flat(1);

console.log(arr2);

let arr3 = arr.flat(2);

console.log(arr3);

// foo.flat(Infinity) ... flats all no matter how much the depth is

// flat map method in javascript

var A = [1,2,3,4,5,6,7]

var B = A.flatMap((num) => {
                    return [[num*3]];
                 });

console.log(A);
console.log(B);


// constructor function to create objects in javascript

function Alien(name, tech) {

    this.name = name;
    this.tech = tech;

    this.work = function () {

        console.log("coding for 12 hours");
    }
}

alien1 = new Alien("abc", "java");

alien2 = new Alien("def", "python");

console.log(alien1.name + " " + alien1.tech);
console.log(alien2.name + " " + alien2.tech);
alien1.work();
alien2.work();

Alien.country = "Greenland"; // becomes a static attribute

console.log(alien1.country);
console.log(alien2.country);
console.log(Alien.country);

Alien.prototype.city = 'delhi'; // instance attribute

console.log(alien1.city);
console.log(alien2.city);


alien3 = new Alien("xyz", "cloud");

console.log(alien3.name + " " + alien3.tech + " " + alien3.city);

// prototype and prototypal inheritance
// whenever you create a object javascript internally creates its object and attaches it to your object

// let arr = [1,2,3,4,5]

// arr.__proto__ is same as Array.prototype

// arr.__proto__ also has its own prototype

// arr.__proto__.__prot__ is same as object.prototype

// prototype of object.prototype is null

// arr.__proto__ ---> Array.prototype
// arr.__proto__.__proto__ ---> Object.prototype
// arr.__proto__.__proto__.__proto__  ---> null

// Classes es6

class User {

    constructor(username, email, password) {

        this.username = username;
        this.email = email;
        this.password = password;
    }

    static countUsers() {

        console.log("There are 50 users");
    }

    register() {

        console.log(this.username + " is registered");
    }
}

class Member extends User {

    constructor(username, email, password, memberPackage) {

        super(username, email, password);
        this.package = memberPackage;
    }

    getPackage() {

        console.log(this.username + " is subscribed to " + this.package + " package");
    }
}

var p12 = new Member("m1", "m1@gmail.com", "afwsew", "standard");

p12.getPackage();
p12.register();

let p11 = new User('abc', 'abc@gmail.com', 'abcd');

console.log(p11.username);
console.log(p11.email);
console.log(p11.password);
console.log(p11.register());
console.log(User.countUsers());

class Counter {

    #count = 30;

    showCount() {
        return this.#count;
    }

    #internalMethod() {
        console.log("This is a private method");
    }

    rprivateFunction() {
        return this.#internalMethod;
    }
}

let c1 = new Counter();

console.log(c1.count);
console.log(c1.showCount());
//console.log(c1.#internalMethod()); ... private method not allowed

rfun = c1.rprivateFunction();

rfun();


class Pe {
    #name;
    constructor(name) {
        this.#name = name;
    }
    get name() {
        return this.#name;
    }
    set name(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.#name = newName;
    }
}

let z1 = new Pe("bnm");

console.log(z1.name);
z1.name = 'poi';
console.log(z1.name);


let z2 = new Pe("mnbv");

console.log(z2.name);
z1.name = 'zxcv';
console.log(z2.name);
