// Loops in JavaScript are used to reduce repetitive tasks by repeatedly executing a block of code as long as a specified condition is true. This makes code more concise and efficient.


for(let i = 0;i<5;i++){
    console.log("hello world");
    
}


// The while loop executes as long as the condition is true. It can be thought of as a repeating if statement
let i = 0;
while (i < 3) {
    console.log("Number:", i);
    i++;
}




// The do-while loop is similar to while loop except it executes the code block at least once before checking the condition.
// let i = 0;
// do {
//     console.log("Iteration:", i);
//     i++;
// } while (i < 3);




const obj ={
    name:"karan",
    age:25,
};
for (let key in obj){
    console.log(key ,":",obj[key]);
    
}


let a =[1,2,3,4,5];
for (let val of a){
    console.log(val);
    
}


// Use for loop when the number of iterations is known.
// Use while loop when the condition depends on dynamic factors.
// Use do-while loop to ensure the block executes at least once.
// Use for...in loop to iterate over object properties.
// Use for...of loop for iterating through iterable objects.

