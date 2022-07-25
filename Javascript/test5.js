// iife (immediately invoked function expression)
(function (num1, num2) {
    console.log(num1 + num2);
})(3,4);


// normal function expression
const calcSum = function (num1, num2) {

    return (num1+num2);
}

console.log(calcSum(3,4));

// closures in javascript

// parent function child function
// child function continues to remember local variables of parent functions even after it goes out of
// scope
// child function creates closure and stores reference of parent local variables

// setTimeOut() function to all function after specific number of seconds

// use cases of closure in javascript
// document.queryselector().classlist.add("")

// map filter reduce forEach callback in javascript ... go through ppts once write examples
// in reduce which is first parameter and which is second
// map vs forEach in javascript
// find index method
// arrays find method , array include method, some method and every method

// try all these methods for handson, for callback function can use lambda functions
// flat and flat map method in javascript

// after lecture - 

// a closure is a function bundled together with its lexical environment

// function x() {

//     var a = 100;

//     function y() {

//         console.log(a);
//     }

//     y();
// }

// x();

function x() {

    var a = 100;

    function y() {
        console.log("y called");
        console.log(a);
    }
    a = 200;
    return y;
}

var z = x();
console.log(z);
z();

function z1() {
    var b = 900;
    function x1() {
        
        var a = 100;
        
        function y1() {
            console.log("y1 called");
            console.log(a, b);
        }
        a = 200;
        return y1;
    }
    return x1;
}

var z3 = z1();
var z4 = z3();
z4();

// setTimeOut simple example - 

function greetings() {

    console.log("Hellloooooooo");
}

setTimeout(greetings, 5000);

//map

function call1(item) {

    return 2 * item;
}

arr1 = [1,2,3,4,5];

ans1 = arr1.map(call1)

console.log(typeof ans1);
console.log(ans1);

//filter

function call2(item) {
    return item % 2 == 0;
}

arr2 = [1,2,3,4,5];

ans2 = arr2.filter(call2)

console.log(typeof ans2);
console.log(ans2);

//reduce

function call3(item1, item2) {

    console.log(`Item1 = ${item1} and Item2 = ${item2}`);

    return item1+item2;
}

arr3 = [1,2,3,4,5];

ans3 = arr3.reduce(call3)

console.log(typeof ans3);
console.log(ans3);

//forEach

arr4 = [1,2,3,4,5];

arr4.forEach(item => console.log("for each -> ", item));


//findIndex

ages1 = [2,24,54,31,77,89];

ans5 = ages1.findIndex(function (age) {

               return age>18;
       });

console.log(ans5);

//find

// The find() method returns the value of the first element that passes a test.

// The find() method executes a function for each array element.

// The find() method returns undefined if no elements are found.

// The find() method does not execute the function for empty elements.

function fun4(age) {

    return age > 18
}

ages = [12,43,5,19,89];

console.log(ages.find(fun4));

//include 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Mango"));
console.log(fruits.includes("Hello"));

//some

ages8 = [1,2,3,4,5];

console.log(ages8.some(age => {return age>1}));

//every

ages9 = [1,2,3,4,5];

console.log(ages9.every(age => {return age>=1}));

// indexOf method

arrz = [1,2,3,4,5];

console.log(arrz.indexOf(5));

// scope change scope and lexical environment

