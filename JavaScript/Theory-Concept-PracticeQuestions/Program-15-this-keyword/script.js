//'this' is a special keyword as unlike ohter keywords it changes the nature of itself depending upon where you use it.
//like 'this' value in global function is window, in function is window, in obj its value is the obj which it is in

//global scope
console.log(this);//value of 'this' is window

//function
function abcd() {
    console.log(this);
}
abcd();//value of 'this' is window

//obj
let obj = {
    name: "Dhruv",
    age: 20,
    sayName: function() {
        let dfgh = () => {
            console.log(this)
        }
        dfgh();
    },
}//here arrow funciton will not work as then the 'this' value will loose and will be window.But if you want to use in a function then you have to use arrow function to fetch values of the obj.
obj.sayName();//value of 'this' is the obj in which it is

//event handler
document.querySelector("h1").addEventListener("click", function(){
    console.log(this.style.color="red");
});//value of 'this' is the element selected for the event handeling


//class
class Abcd{
    construction(){
        console.log(" heyeye ");
        this.a = 12;
    }
}
let val = new Abcd();//value will be blank


//Manual binding 
//call apply bind
//function ko call karte taki hum 'this' ki value set kar sake
let objt = {
    name: "Dhruv",
    age: 20,
}

function abd(a, b, c){
    console.log(this, a, b, c);
}

abd.call(objt, 1, 2, 3);

abd.apply(objt, [1, 2, 3]);

let fnc = abd.bind(objt, 1, 2, 3);