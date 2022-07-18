// append and exend

l1 = [1,2,3]

l2 = [4,5]

l3 = [l1,l2]

console.log(l3)

l4 = [...l1, ...l2]

console.log(l4)

// Set data structure in javascript and methods related to it, sets donot maintain order, study sets
// setName.forEach(functionName) , values() method on sets return a iterator .next().value()

// <td colspan = 3>

// document.addEventListener()

// map data structure in javascript, similar to objects in javascript, key value pair

// objects are unordered where as maps are ordered

// this map is basicalluy an array of arrays , each sub array is a key value pair

// date formats and date objects , playing with dates in javascript

// new Date(date string)

// all date functions check out

// default parameters in javascript

// After Lecture - 

function printV(item) {

    console.log(item);
}

const mySet = new Set([1,2,3,4,5]);

mySet.forEach(printV);

mySet.add(6);

mySet.forEach(printV);

console.log(mySet.has(9));

mySet.delete(6);

mySet.forEach(printV);

itr = mySet.values();

console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())

console.log(mySet.size)

const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);

console.log(myMap.size)

console.log(myMap.get('a'))
console.log(myMap.get('c'))

function map_print(v, k) {

    console.log(k + " : " + v);
}

myMap.forEach(map_print);

// myMap.keys() myMap.values() returns iterators

const date1 = new Date();

const date2 = new Date(2020, 05, 25, 05, 22, 20, 11)

const date3 = new Date(29104525820582)

console.log(date1)

console.log(date2)

console.log(date3)

console.log(date1.getDate())

console.log(date1.getMonth())

console.log(date1.getTime())

// many more methods, refer pdf if required