class Car{
    constructor(brand,number){
        this.brand=brand;
        this.number=number;
    }

    detail(){
        console.log(`name of car is ${this.brand} and its number is ${this.number} `);
    }


}
let car1 = new Car("Honda",22222);
let car2 = new Car("Alto",1776);
console.log(car1.brand);

car1.detail()
car2.detail()