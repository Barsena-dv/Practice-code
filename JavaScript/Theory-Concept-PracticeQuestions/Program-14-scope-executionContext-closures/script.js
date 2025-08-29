//A scope in which till when can you use your created variables and functions
//Scope:Functional scope, Global scope and block scope.
//Functional scope: It can be used only in a function.
//Global scope: Can be used in whole code.
//Block scope:'{}' is where you can only use


//Execution Content:
//There are two phases in this memory phase and execution phase.
//Whenever JS sees that a function is running it forms an execution context which is a process runs in two phases which are given above.


//Lexical scoping:An elements is physically available in a function is totally dependent on from where can you can access it.


//Dynamic scoping:The value you get will depend on form where you are calling it.


//Closures:A closure is a function which exists in a parent function and the inner function uses return, and the returning function uses an value on parent function.

function abcd() {
    let a = 34;
    return function (){
        console.log(a);
    }
}//This is a closure.