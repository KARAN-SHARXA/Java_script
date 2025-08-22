//An object is a collection of key-value pairs (like a dictionary in Python, or a map)

const { use } = require("react");

let person ={
    name:"karan",
    age:21,
    isStudent:true
};

console.log(person);
console.log(person.name);
console.log(person["age"]);

// adding ipdating deleting
person.name ='karan sharma';
person.marks=55;
delete person.isStudent;
console.log(person);

//Objects with Functions (Methods)

let car ={
    brand: "BMW",
    start: function(){
        console.log("car started");
        
    }
};
car.start();

//this keyword in object
let student ={
    name:"Amna",
    greet(){
        console.log("hello"+ this.name);
        
    }
};
student.greet()

//nested objects
let user1 ={
    name1: "Raj",
    address1:{
        city1:"Mumbai",
        pincode1:4000001
    }
};
console.log(user1.address1.city1);



let obj ={a:1,b:2,c:3};
for(let key in obj){
    console.log(key,obj[key]);
    
}


let person ={
    name:"karan sharma",
    age:20,
    marks:35,
    student(){
        console.log(`hi i am ${this.name} `);
        
    }


}
console.log(person.name);
person.name="rahul"
console.log(person);
person.city='kangra'
console.log(person);
delete person.marks
console.log(person);
person.student()




