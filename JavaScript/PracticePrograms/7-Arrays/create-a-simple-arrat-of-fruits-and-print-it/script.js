// let fruits = ["mango", "apple", "pear"];
// fruits.push("pinapple");
// fruits.pop();
// fruits.push("banana");

//Insert "Red" and "Blue" at index 1 in the array
// let color = ["Yellow","Green"];
// color.splice(1, 0, "Red","Blue");

//Extract only middle three elements from the array
// let num = [1,2,3,4,5,6];
// num.splice(2,3);

//sort an array and reverse it
// let names = ["mango", "apple", "pear", "pinapple"];
// names.sort().reverse();

//Use map to squre the nembers of array
// let sqr = [1, 2, 3, 4, 5, 6, 7];
// let sqr2 = sqr.map(function(val){
//     return val = val*val;
// });

//Use .filter() to keep numbers greater that 10
// let n = [20,4,3,56,13,41,6,2];
// let nb = n.filter((val) => {
//     if(val>10) return val;
// });

//Use .reduce() to find th sum of the array
// let dig = [1,3,4,5,64,3,6,32,13];
// let got = dig.reduce((sum,dig) => {
//     return sum + dig;
// },0);

//Use .find() to search the first number greater than 10
// let gmt = [1,5,6,23,12,4,23,14];
// let ser = gmt.find((val) => {
//     return val>10;
// } );

//Use .some() to check if any student scored below 35
let score = [54,65,75,34,65,12,45];
let sec = score.some((val) => {
    return val<35;
});