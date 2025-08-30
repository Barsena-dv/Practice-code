//OOPs
//First we have to create a class whcih will contain object parameter after which we can call it by with defferent object value.
//Object-Oriented Programming (OOP) is a programming paradigm based on the concept of objects, which bundle together data (called attributes or properties) and behavior (called methods).It organizes code into reusable, modular units that model real-world entities, making programs easier to understand, scale, and maintain.

function CreatePencils(name, price, qty, company, color) {
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.company = company;
    this.color = color;
}

CreatePencils.prototype.write = function(text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
}

let pencil1 = new CreatePencils("Natraj", 10, 2, "IND", "Red");
let pencil2 = new CreatePencils("Doms", 30, 2, "Tricel", "Blue");//This is constructor function and in constrctor function you should make the first letter capital.

