//Types of operators
//Arithmatic, comparison, logical, assignment, unary, ternay
//Arithmatic operators: +, -, *, /, %, **(Exponantial works as to give the power)
//Comparison operators: ==, ===, <, >, <=, >=, !=, !==
//Assignment operators:=, +=, -=, *=, /=, %=
//Logical operators: !, &&, ||
//Unary operators:  +, -, ++, --, type of//typeof give wrong in the null(gives object), array(also gives object) and NaN(gives number)
//instanceof: gives the connection between two elements and it only works with refernce data types you can say it confirms the origin of a variable
//Ternary operators: ?, : ie.  condition ? valueIfTrue : valueIfFalse


//Practice Ques:

// let x = 10;
// let y = 20;

// if(x > 5  &&  y < 25){
//     console.log("A");
// }
// else{
//     console.log("B");
// }

// let isAdmin = true;
// let isLoggedIn = false;

// if(isAdmin  ||  isLoggedIn){
//     console.log("Access Granted");
// }
// else{
//     console.log("Access Denied");
// }

// let temp = 35;

// if(!(temp < 30)){
//     console.log("Hot");
// }
// else{
//     console.log("Pleasent");
// }

// let a = 0;

// if(a){
//     console.log("truthy");
// }
// else{
//     console.log("falsy");
// }

// let score = 78;

// let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail";
// console.log(grade);

// let points = 78;

// let status = points > 100 ? "Gold" : points > 50 ? "Silver" : "Bronze";
// console.log(status);

// let isLoggedIn = true;
// let haveToken = false;

// let access = isLoggedIn && haveToken ? "Access Granted" : "Access Denied";
// console.log(access);

// let a = 5;
// a++;
// console.log(a);

// let a = 7;
// ++a;
// console.log(a);

// let a = 7;
// let b = a++;
// console.log(a,b);

// let a = 7;
// let b = ++a;
// console.log(a,b);

// let a = 7;
// console.log(a--);
// console.log(a);

// let a = 7;
// let result = a++ + ++a;
// console.log(result);

// let likes = 100;
// function likePost(){
//     return ++likes;
// }
// console.log(likePost());
// console.log(likes);

let count = 5;

if(count -- === 5){
    console.log("Matched");
}
else{
    console.log("Unmatched");
}