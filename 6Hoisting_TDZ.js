//Hoisting means:
// All variable and function declarations are moved to the top of their scope (before code runs).

// But only the declaration is moved, not the value/assignment.

console.log(a);
var a = 10;


//Temporal Dead Zone (TDZ)

// TDZ is the time between hoisting and initialization where a variable exists but cannot be accessed.

// This happens with let and const (not with var).

// If you try to use the variable in TDZ → ReferenceError

console.log(b); // ❌ ReferenceError (TDZ)
let b = 20;
