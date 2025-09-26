"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Class Definition
//Classes are like function you have to use the class key word and then the name of the class which you want to create and the content wil be i the '{}' and after creating it whenever you will call the class you can use the parameter of that classes.
//Syntax
class Device {
    name = "lg";
    price = 50000;
    category = "Monitor";
} //this is how you create the class.
let d1 = new Device(); //this is how you call the class
let d2 = new Device();
//Constructor
class BottleMaker {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let b1 = new BottleMaker("Bisleri", 34); //this is the syntax of the constructor of the class.
//# sourceMappingURL=app.js.map