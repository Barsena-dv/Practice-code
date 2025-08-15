//Functions
//In normal conditions a code will run immediatly after we completed it but that can be issue so here comes functions with whose help we can run the code when we want by calling it where it needed.

//Exo sceleton
// function name(){
//     //code
// }//these are called function statement or declarations
//name();//calling function

// let lnd = function(){
//     //code
// }//these are called function expressions
// lnd();

//fat arrow function
// let lnd = ()=>{
//     //code
// }//arrow functions
// lnd();

//Parameters and arguments
// function dance(ani){
//     console.log(`${ani} dancing`)
// }
// dance("ghoda");
// dance("gadha");
// dance("kutta");
// dance("hiran");
// dance("barasingha");

// function add(n1,n2){
//     console.log(n1 + n2);
// }//here n1 & n2 are parameters
// add(6,2);//here 6 & 2 are arguments

//Default rest and spread parameters

// function add(v1=0,v2=0){
//     console.log(v1 + v2);
// }//default parameters
// add();

// function abcd(...val){
//     console.log(val);
// }//rest-spread parameters:when we give many arguments then there will be many parametere for that we use these'...' rest and spread parameters
// //If the '...' is place in the parameters then it is rest and if it is in placed in the arrays and objects then it is spread
// abcd(1, 2, 3, 4, 5, 6, 7, 8, 9)

//Return and early return: from where the value came it returns to where it was called back
// function abcd(a){
//     return 12 + a;
// }
// let val = abcd(43);//like here if we give it varibale the value will be store in the variable.
// console.log(val);//and you can even call it

//First class functions:They are a type of function you can treat like values that means you can store it in variables and many more.
// let abd = function(){

// }

// function abcd(val){
//     val()
// }
// abcd(function(){
//     console.log("hey");
// });//like here we have placed function in the abcd which is a function because of whic we can call val as a function ie., we have given a parameter 'val' to the function 'abcd' because of which when we call abcd function and place function in it then it acts as argument so that it becomes the value of the parameter 'val'.so when we call val the functioned returns.

//Higher order functions: they are a function who returns or accept funtions or both in thier parameter\
// function abcd(val){
//     val()
// }
// abcd(function(){
//     console.log("hey");
// });//like here 'abcd' is a high order function.Here the 'abcd' function is accepts the function in the pertameter

// function abcd(){
//     return function(){
//         console.log("hii");
//     }
// }
// abcd()();//Here it return in the function because of which when we call the function 'abcd' we place two '()' one for 'abcd' itself and one for the returned function

//Pure and Impure funtions:A function who doesn't change the outer value is called the pure functions and opposite are impure funtions

// function bds(){
//     console.log("hihihihi");
// }//these are pure functions because it only retun the value

// function dds(){
//     a++;
// }//these are impure because the alter the actual value one way or another

//Closures:A function which returns another functions and the returned function always uses the variable of the parent function

// function oioi(){
//     let a = 7;
//     return function(){
//         console.log(a);
//     }
// }//like here

//Lecical scoping:It is kind of a pandora box you have a function in another function in another function and so on. And the variable you have declared in the function you can access it in all over the function no matter in which function are there in that function
// function vsd(){
//     let a = 8;
//     function dsd(){
//         let b = 9;
//         function sds(){
//             let h = 6;
//         }
//     }
// }//like here 'a' you can access it in 'dsd' and 'sds' but not outside and 'b' you can access in 'sds' but not in the vsd

//IIFE(Immediately Invoked Function Expressions)
(function dfdf(){
    console.log("hihi");
})();

//Hoisting in the function declaration but doesn't works in the funtion statement