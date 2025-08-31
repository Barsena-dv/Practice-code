//IN class constructors you can create more i say systematically and in class the first thing that start is also a constructot. and in class the forst word is always capital

class CreatePencils{
    constructor(name, company, price, color){
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }
}
let p1 = new CreatePencils("Natraj", "IND", 10, "Red");
let p2 = new CreatePencils("Doms", "Tricel", 10, "Blue");


//Extends and super

class User{
    constructor(name, address, username, email){
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = "user";
    }

    checkRole() {
        return `You are ${this.role}`;
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name}: ${text}`;
        document.body.appendChild(h1);
    }
}

class Admin extends User{
    constructor(name, address, username, email){
        super(name, address, username, email);
        this.role = "admin";
    }

    remove(){
        document.querySelectorAll("h1").forEach(elem => {
            elem.remove();
        });
    }
}

let u1 = new User("Dhruv", "Ahmedabad", "123gando","abc@gmail.com");
let u2 = new User("Heli", "Delhi", "465hesi","bcd@gmail.com");
let a1 = new Admin("admin1", "India", "admin","b@gmail.com");

//Inheritances
let coffee = {
    color: "brown",
    drink: function(){
        console.log("gut gut gut")
    },
};

let arabiataCoffee = Object.create(coffee);
arabiataCoffee.taste = "bitter";
arabiataCoffee.drink();