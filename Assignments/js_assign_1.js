// Array methods in javascript

arr1 = [1, 2, 3, "four", "five"]

console.log(arr1)
console.log(arr1.length)
console.log(arr1[0])
console.log(arr1[arr1.length-1])

console.log(arr1 instanceof Array)

console.log(arr1.toString()) // 1,2,3,four,five

// push , pop to add elements at end of the array
// shift , unshift to add elements at front of the array

console.log(arr1.push("six"))
console.log(arr1)

console.log(arr1.pop())
console.log(arr1)

console.log(arr1.unshift(0))
console.log(arr1)

console.log(arr1.shift())
console.log(arr1)

console.log(arr1)
arr1.sort()
console.log(arr1)

delete arr1[4]
console.log(arr1)

a1 = [1,2,3]
a2 = [4,5,6]

a3 = a1.concat(a2)

console.log(a1)
console.log(a2)
console.log(a3)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); //At position 2, add 2 elements
console.log(fruits)

const fruits1 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits1.splice(2, 2); //At position 2, remove 2 items 
console.log(fruits1)


// String methods in javascript

my_str = "Hello Javascript" // this is actually an object and has a lot of methods and properties

console.log(my_str.length)
console.log(my_str[0])
console.log(my_str[my_str.length-1])

console.log(my_str.indexOf("hello"))
console.log(my_str.indexOf("script"))
console.log(my_str.indexOf("well"))

console.log(my_str.slice(0,5))
console.log(my_str.slice(6))

console.log(my_str.indexOf("a"))
console.log(my_str.lastIndexOf("a"))
console.log(my_str.search("a"))

console.log(my_str.slice(0,5))
console.log(my_str.slice(6))

console.log(my_str.slice(0,5))
console.log(my_str.slice(6))

console.log(my_str.substr(0,3))
console.log(my_str.substr(6,4))

console.log(my_str.toLowerCase())
console.log(my_str.toUpperCase())

//console.log(my_str.replace("Javascript", "Python"))
console.log(my_str.concat(" hello"))

console.log("      nfnwoegnowe       ".trim())

console.log("hello".charAt(1))
console.log("Aello".charCodeAt(0)) // 65 ... ascii for A is returned
console.log("hello hi".split(" "))
console.log(typeof "hello hi".split(" "))


// rest and spread operators in javascript

// rest variable number of arguments passing to a function

function foo(...args) { // args is an array here

    console.log(args)
}

foo(1,2,4)

function printNumbers(firstNumber, secondNumber, ...remainingNumbers) {
    console.log(firstNumber)
    console.log(secondNumber)
    console.log(remainingNumbers)
}
printNumbers(1, 2, 3, 4, 5)

//split
const oldArray = [3, 4, 5]
const newArray1 = [...oldArray]
console.log(newArray1)
// [3,4,5]
const newArray2 = [1, 2, ...oldArray]
console.log(newArray2)
// [1,2,3,4,5]

//Key takeaway: rest groups, spread splits.