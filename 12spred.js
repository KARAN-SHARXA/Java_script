//The spread operator is written as ... (three dots).
// It is used to expand (spread out) elements of an array or object.

let arr1 =[1,2,3];
let arr2 =[...arr1];
console.log(arr2);
console.log(arr1 === arr2); //// false (new copy, not same reference)


//Merge Arrays
let a =[1,2];
let b=[3,4];
let c=[...a,...b];
console.log(c);


// add extra element 
let arr =[1,2,3];
let newArr =[0,...arr,4];
console.log(newArr);


//Spread with objects
let user = { name: "Karan", age: 21 };
let copyUser = { ...user };

console.log(copyUser); // { name: "Karan", age: 21 }
console.log(user === copyUser); // false

//Spread in Function Calls

// When a function expects multiple arguments, spread expands the array.

function sum(x, y, z) {
  return x + y + z;
}

let numbers = [1, 2, 3];

console.log(sum(...numbers)); // 6


// Spread → "Unpack" (expand elements)

// Rest → "Pack" (collect elements)

function add(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(add(1, 2, 3, 4)); // 10

