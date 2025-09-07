// // Callback = ek function jo dusre function ko argument ke roop me pass hota hai, aur baad me call kiya jaata hai.
// function greet(name,callback){
//     console.log("hello" + name);
//     callback();
    
// }

// function afterGreeting(){
//     console.log("welcome to javaScript");
    
// }

// greet("karan", afterGreeting);



// function greet(name,callback){
//     console.log("hello" + name);
//     callback();
// }
// greet("karan",function(){
//     console.log("this is a callback function");
    
// });


// function oderPizza(flavor,callback){
//     console.log("Ordering" + flavor +"pizza...");
//     callback();
    
// }


// oderPizza("chesse",()=>{
//     console.log("Pizza is ready");
    
// } );




// console.log("start");


// setTimeout(()=>{
//     console.log("inside settimeout");
// },2000);


// console.log("End");



// function oderPizza(flavor,callback){
//     console.log("Ordering" +flavor + "pizza...");

//     setTimeout(()=>{
//         callback();
//     },3000)
    
// }
// oderPizza("cheese",()=>{
//     console.log("Pizza is ready");
    
// })


// let promise = new Promise((resolve,reject)=>{
//     let success = true;


//     if(success){
//         resolve("task completed");
//     }else{
//         reject("Task failde!");
//     }
// });


// promise.then(result=>console.log(result));


// let promise = new Promise((resolve,reject)=>{
//     console.log("Fetching data...");

//     setTimeout(()=>{
//         resolve("Data received after 2 sec");
//     },2000);
    
// });

// promise.then(data=>console.log(data));


function createPromise(name) {
  return new Promise((resolve, reject) => {
    let a = Math.random();

    if (a < 0.5) {
      reject(`${name}: Random number not supporting you`);
    } else {
      setTimeout(() => {
        console.log(`${name} is done`);
        resolve(name);
      }, 3000);
    }
  });
}

let prom1 = createPromise("Promise 1");
let prom2 = createPromise("Promise 2");
let prom3 = createPromise("Promise 3");

Promise.all([prom1, prom2, prom3])
  .then(results => {
    console.log("All Promises resolved:", results);
  })
  .catch(err => {
    console.log("At least one failed:", err);
  });


console.log("hello i am karna");
