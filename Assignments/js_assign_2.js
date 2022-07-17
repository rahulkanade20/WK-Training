/*
// scope resolution
var a7 = 7;
let a8 = 8;
const a9 = 9;

console.log(a8);
a8 = 100;
console.log(a8);

//a9 = 200; // error
//console.log(a9);

function foo() {

    console.log(a8);

    var a1 = 1;
    let a2 = 2;
    const a3 = 3;
}

{   
    console.log(`block ${a8}`);
    var a4 = 4;
    let a5 = 5;
    const a6 = 6;
}

console.log(a4)
console.log(a5)

foo()

*/

// Hoisting 

console.log(z)
var z = 10;

// {

//     console.log(r1);
//     console.log(r2);

//     let r1 = 10;
//     const r2 = 20;
//}

const f1 = function () {
    console.log("function expressions")
}

f1();