// Functions in JavaScript are reusable blocks of code designed to perform specific tasks

function sum(x,y){
    return x+y;
}
console.log(sum(6,9));



function welcomeMsg(name){
    return ("hello" + name + "welcome to code");
}
let nameVal = "karan";
console.log(welcomeMsg(nameVal));


// Functions can be used multiple times, reducing redundancy.
// Break down complex problems into manageable pieces.
// Manage complexity by hiding implementation details.
// Can call themselves to solve problems recursively.

// function expression = when variable hold function
const mul = function(x,y){
    return x*y;
    
};
console.log(mul(4,5));


//An arrow function is a shorter syntax for writing functions in JavaScript

const add = (a,b) => a+b;
console.log(add(5,3));


const gfg =()=>{
    console.log("hi from karan");
    
}
gfg();


const square =x=>x*x;
console.log(square(4));


//Immediately Invoked Function Expression (IIFE)
(function(){
    console.log("hi i am karan");
    
})();


//Callback Functions : A callback function is passed as an argument to another function and is executed after the completion of that function.



function num1(n,callback){
    return callback(n);
}
const double =(n)=> n*2;
console.log(num1(5,double));


//Nested functions
function outerFun(a){
    function innerFun(b){
        return a+b;
    }
    return innerFun;

}
const addTen = outerFun(10)
console.log(addTen(5));


//Function binding 
// const person ={
//     name: 'GFG',
//     greet1: function(){
//         console.log('hello' + this.name);
        
//     }
// };
// const greet1 = person.greet1;
// greet1();



// const person ={
//     name: 'GFG',
//     greet: function(){
//         console.log('hello' +this.name);
        
//     }
// };
// const greet = person.greet;
// const boudgreet = greet.bind(person);
// boudgreet();


//function hoisting 
greet()
function greet(){
    console.log("hello,Mahima");
    
    
}


//Function Expression Hoisting

// hello();
// var hello = function(){
//     console.log('hi');
    
// }

//higher order function = Takes another function as an argument.
// Returns another function as its result.


function fun(){
    console.log("hello, world");
}
function fun2(action){
    action();
    action();
}
fun2(fun);

//Popular Higher Order Functions in JavaScript
//1 map

const n = [1,2,3,4,5];
const square1 = n.map((num)=> num * num);
console.log(square1);
// filter 
const n1 =[1,2,3,4,5];
const even = n1.filter((num)=>num%2 === 0);
console.log(even);
// reduce
const n2 =[1,2,3,4,5];
const sum1 = n2.reduce((acc,curr)=> acc+curr,0);
console.log(sum1);
// find
const n3 =[1,2,3,4,5];
const fEven = n3.find((num)=> num%2 === 0);
console.log(fEven);


