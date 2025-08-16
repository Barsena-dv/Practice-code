//These are created in the '[]' and are reference data types

// let arr = [2, 5, 3, 6, 5, 3];//like this you can make an array.And position in the array are called index and start with zero.
// arr[3];//accessing
// arr[2] = 57;//like this you can modify the array

// let brr = [5, 6, 6,];//like this also arrays can be made


//methods

let bar = [5, 54, 45, 4, 3, 53, 2];

//bar.push(3434);//this how we create a method place a name of the array the give '.' and place a name of the method with '()' at the last then 'push()' can be called a method.Push method is used to push a value or add a value in the existing array.

//bar.pop(4);//similarly we have 'pop()' method for taking a value out of the existing array.

// bar.shift();//then we have 'shift()' method which take values from the start rather than form any place

// bar.unshift(0);//then we have 'unshift()' method which is opposite of the shift method as it adds a value from the starting of an existing array

// bar.splice(1,2);//here we have 'splice()' method which subtracts the value from the middle of an existing array based on the values you have given to the splice like here the 1st value '1' is the value of from which index of an array you want to subtract the value and the 2nd value '2' is the value of how many vlaues  or elements you want to subtract from an existing arrat.
//Output: [5,3]

// let newbar = bar.slice(0, 2);//then we have 'slice()' by which we can take the values from an existing array and make a new array of the new values and the orignal array will remain as it is.Like here it will take the value from the zeroth index to the 2nd index of the 'bar' array and will make a new array of those value//
//Output of newbar: [5,5]

// bar.reverse();//then we have the 'reverse()' method which just reverses an array.

// let br = bar.sort(function(a,b){
//     return a - b;
// });//then we have a sort method which first accept a function in it then we have to take two value in the function then return how you need to sort the array.Like here we have returned 'a - b' which will sort the array in the ascending order and if we have returned 'b - a' then the array will be sorted in descending order.

// bar.forEach(function(val){
//     console.log(val)
// });//here we have 'forEach' method which accepts the function in it and runs that function for every value of an array.

// let ar = bar.map(function(val){
//     if(val > 5){
//         return val;
//     }
// });//now we have 'map()' method it also just like for each take the every value from the array and return the function for everyvalue. One thing to remember in the 'map()' method is that we inly use that method when we want to create a new array with the data of an existing array and want to place some value in them.

let gh = bar.filter(function(val){
    if(val > 5) return true;
});//'filter()' is also a method like map which makes a new array takes the data from an existing array but here we can filter the values and the rest values don't print and also don't return undefined.

let jk = bar.reduce(function(lol, val){
    return lol + val;
}, 0);//here we have 'reduce.()' method in which we give values to the functio parameter and the first value we can declare after the function and it will remmber that value in the number of time the function will goes with the data of the array and runs the code that the function has

let rm = bar.find(function(val){
    return val === 5;
});//then we have 'find()' method which basically finds and returns the value from the array according to the condition you have given in the function.

let any = bar.some(function(val){
    return val > 50;
});//here we have 'some()' method which is basically used to check wether any values based on the conditions are exsiting in the array or not and return them.

let eve = bar.every(function(val){
    return val >10;
});//here no we have 'every()' method which is opposite of the 'some()' which checks if the whole array is padding the conditions you have put in the function.


//Destructuring and spread operators

let [a, b, ,d] = bar;//this is destructuring it what it basically does is we can make variable and assign them the values of the array.

let bar2 = [...bar];//we have discussed the rest operator in array we can use them to copy the array as we can't normally and this we call as spread operator.