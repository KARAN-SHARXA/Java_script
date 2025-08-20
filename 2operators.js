//avaScript operators are symbols or keywords used to perform operations on values and variables


//Arithmetic Operators perform mathematical calculations like addition, subtraction, multiplication, etc

const sum = 5 + 3; // Addition
const diff = 10 - 2; // Subtraction
const p = 4 * 2; // Multiplication
const q = 8 / 2; // Division
console.log(sum, diff, p, q);


//Assignment operators are used to assign values to variables. They can also perform operations like addition or multiplication while assigning the value.


let n = 10;
n=n+5;
console.log(n);


//Comparison operators compare two values and return a boolean (true or false). They are useful for making decisions in conditional

console.log(10 > 5);
console.log(10 === "10");


//Logical operators are mainly used to perform the logical operations that determine the equality or difference between the values.
const a = true, b = false;
console.log(a && b); // Logical AND
console.log(a || b); // Logical OR

//Bitwise operators perform operations on binary representations of numbers.
const res = 5 & 1; // Bitwise AND
console.log(res);


//The ternary operator is a shorthand for conditional statements. It takes three operands.
const age = 18;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);

//Unary operators operate on a single operand (e.g., increment, decrement).
let x = 5;
console.log(++x); // Pre-increment
console.log(x--); // Post-decrement (Output: 6, then x becomes 5)