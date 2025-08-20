// Type Conversion
// Type Conversion is the process in JavaScript in which the data type of the variables is converted from one type to another type manually. This is also known as explicit type casting.

// Performed manually by the programmer.
// Uses built-in JavaScript methods like Number(), String(), and Boolean().
// Ensures control over data types in code.



//String to Number
let s ="123"
let n = Number(s);
console.log(n);


//Number to String
let nn = 123;
let ss = String(n);  //Converts number to string
console.log(s);

let bool = true;
let nu = Number(bool);  //Converts boolean to number
console.log(nu);


//Boolean to String
let bool1 =true;
let s1 =String(bool1)
console.log(s1);



//Type Coercion
// Type coercion is the automatic conversion of one data type to another by JavaScript during operations. This is also known as implicit type casting.

// Performed automatically by JavaScript.
// Happens mostly in comparison and arithmetic operations.
// Can lead to unexpected results if not handled properly.


//String + Number
let n2=5;
let s2 ="5"
console.log((n2+s2));

//Boolean + Number
let boo3l = true;
let n3=10;
let res = bool +n3;
console.log(res);



