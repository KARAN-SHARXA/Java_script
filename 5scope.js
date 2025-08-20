//scope defines the accessibility of variables in different parts of your code



function example() {
    var x = 10;   // Function-scoped
    let y = 20;   // Function-scoped
    const z = 30; // Function-scoped
    console.log(x, y, z); // Output: 10 20 30
}

example();

console.log(x); // Error: x is not defined
console.log(y); // Error: y is not defined
console.log(z); // Error: z is not defined



let globalLet = "This is a global variable";;

function fun() {
    localLet = "This is a local variable";
}

fun();
console.log(globalLet); // This is a global variable
console.log(localLet); // This is a local variable