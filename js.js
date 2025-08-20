// Variable is like a container that holds data that can be reused or update later
// var = function scoped or globally scoped,reassigning is allowed

var n = 5;
console.log(n);

var n = 20;
console.log(n);



// let keyword = block scope and connot be re declared in the same scope

let m= 10;
n=20;
console.log(m);

// const = The const keyword declares variables that cannot be reassigned. It's block-scoped as well.

const q = 100;
// n = 200; This will throw an error
console.log(q)




// data types =Primitive datatypes represent single values and are immutable
// number
let pi = 3.14;
console.log(pi);


let s ="hello worls";
console.log(s);

let bool = true;
console.log(bool);

//. Undefined: A variable that has been declared but not assigned a value.

let notAssigned;
console.log(notAssigned);

// Null: Represents an intentional absence of any value.
let empty = null;
console.log(empty);

// Symbol: Represents unique and immutable values, often used as object keys.

let sym = Symbol('unique');
console.log(sym);


// Non-Primitive Datatypes
// Non-primitive types are objects and can store collections of data or more complex entities.


// object = Represents key-value pairs

let obj = {
    name: "Amit",
    age: 25
};


// 2. Array: Represents an ordered list of values.

let a = ["red", "green", "blue"];

// 3. Function: Represents reusable blocks of code

function fun() {
    console.log("GeeksforGeeks");
}