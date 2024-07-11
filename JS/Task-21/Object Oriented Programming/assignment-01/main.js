// function Car(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
// }

class Car{ 
    constructor(name, model, price){
        this.n = name;
        this.m = model;
        this.p = price;
    }
    Run(){
        console.log("Car Is Running Now");
    }
    Stop(){
        console.log("Car Is Stopped");
    }
}
let car1=new Car("BMW",2020,550000);
let car2=new Car("toyota",2021,700000);
let car3=new Car("mercedes",2019,600000);

console.log(`Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`);
console.log(car1.Run());


// Needed Output

"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"