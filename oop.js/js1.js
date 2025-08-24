let car = {
    brnad : "BMW",
    color: "Red",
    speed: 120,

    
     start: function(){
        console.log("car started");
        
     },
     drive: function(){
        console.log(`car is driving at ${this.speed}`);
        
     },
};

// Add new property

car.number=11111,
car.brnad="ka",

//delete
delete car.speed;
    
console.log(car.brnad);
car.start();
car.drive();
console.log(car);



//obkect inside object

let student ={
    name:'rahul',
    marks:{
        math:90,
        science:85
    }
}
console.log(student.marks.math);


//this keyword
let student1={
    name:"rahul",
    age:20,
    greet(){
        console.log(`hello, my name is ${this.name} and i am ${this.age} year old` );

        
    }
}
student1.greet()


//constructor

function Car1(brnad,color){
    this.brnad=brnad;
    this.color=color;

    this.start=function(){
        console.log(`${this.brand} (${this.color}) started 🚗`);
        
    };
}






let car1 = new Car1("BMW","Red");
let car2 = new Car1("Audi", "Black");
car1.start()
car2.start()

function Student11(name,age){
    this.name=name;
    this.age=age;
    this.greet=function(){
        console.log(`hi i am ${this.name} and ${this.age} year old`);

        
    };
}

let stu1= new Student11("Karan",21);
let stu2= new Student11("Karan",331);

stu1.greet()





class laptop{
    constructor(brand,color){
        this.brand = brand;
        this.color=color;
    }

    start(){
        console.log(`${this.brand} color is ${this.color} `);
        
    };
}

let laptop1 = new laptop("asus","black");
laptop1.start();
console.log(laptop1.brand);











