// var let cosnt
// var a;
// var a = 12;
// let a;
// let a = 12;
// const a = 12;


// declarationa and initializations.

//var a = 13; //declarations.
//var a = 12; //declare and initialize

// with var the problem is it adds in in window
//and it is function scoped
// you can redeclare it and it will still not give error and we are talking about declaring it with same name

//so we will go with the 'let'
//let a = 12;// it will be used for the changing value.

//const discount = 12;//this will be used for the permanant values as they will not change with the time.
//like the names of a person and intitutes.
//const dulha = "lab";
//const dulhan = "laby";


//scope(global , block , functional)

// function ab(){
//     var a = 12;
// }//this will only apply in the funtion so it has functional scope
//var a = 12;//this will apply in the whole webpage so in this this tha scope is global

//Global scope variable: A variable you have created in open without any curly braces'{}' that we call as a Global scope varible

//Block scope variable: A variable you have created in the curly braces'{}' is we call as block scope variable

//And 'var' doesn't respect this blocks mean if we create in the block then also we can use it in whole program as it is a fuctional scoped

//And 'let' is a block scoped variable


//Reassignment and Redeclaration

//var a = 12;
//a = 32;//updation or reassignment
//var a = 14;//here with 'var' redeclaration is allowed.

//let b = 13;
//b = 42;//but same is not possible in the 'let' variable.


//Temporal Dead zones

//console.log(a);//this will show error as 'value not defined' in any other language as it is not logicaly right to decalre a variable after using the value

//let a = 12;//but in java script it shows as 'can't take the value before initializatin' as it know that you have defined the value but still can't use the value as it is defined after the using the value

//Tempra Dead Zone: It is the area in which java script knows that value exist but it can't return the value  i.e the area above the declacred line of the value


//Hoisting Impact per type

//Hoisting: It is basically the term we use for when we make variable it breaks into two parts then the declaration part goes up but the intialization part remains down.

//var a = 12;//In this the two broken parts are 'var a = undefined' and 'a = 12'

