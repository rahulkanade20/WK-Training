// array, string methods 
// scopes
// hoisting
// maps, sets

// string methods

let txt = "abcdefghi";
console.log(txt.length);
console.log(txt.slice(0,5));
console.log(txt.substring(0,5));
console.log(txt.substr(0,5));
console.log(txt.replace("ab", "xy"));
console.log(txt.toUpperCase());

// array methods

const arr = [5,3,4,2,1];

console.log(arr.toString());

arr.push(10);

console.log(arr.toString());

arr.pop();

console.log(arr.toString());

arr.sort();

console.log(arr.toString());

// scopes

{
    let a = 5;
    var b = 7;
    c = 9;
}

//console.log(a); // .. no access
console.log(b); 
console.log(c);

// hoisting

// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

x = 5; // Assign 5 to x

console.log(x);
                    
var x;

// carName = "Volvo"; ... reference error
// let carName;

// carName = "Volvo"; ... syntax error
// const carName;

// map

// A Map holds key-value pairs where the keys can be any datatype.

// A Map remembers the original insertion order of the keys.

const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits.get("apples"));
console.log(fruits.size);
console.log(fruits.has("oranges"));

// set

const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

console.log(letters.values());
console.log(typeof letters);

letters.forEach(function (v) {
    console.log("value -> " + v);
})