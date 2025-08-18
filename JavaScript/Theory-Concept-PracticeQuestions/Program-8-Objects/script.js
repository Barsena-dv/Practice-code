//objects


//Syntax

// let obj = {
//     name: "Dhruv",
//     age: 20,
// };//this is how an object is made
// obj.age//how to access an object

// let aa = "name";
// obj['aa']//like this also you can access an obj this type is there because it can convert the value of an variable if you want to access the variables value with the variable's name.Because of which you can just place the varibble and it will convert it to the value which it will access from the existing object.Which you can't form 'obj.age' here it literaly will search the age in the object will not convert the value if you put variable rather that value like 'obj.aa' this.


//Key Value Structure

// let obj = {
//     name: "Dhruv",
// };//here 'name' is key and 'Dhruv' is value


//Nesting,  Deep access, Object Destructuring

// const user = {
//     name: "Dhruv",
//     age: 20,
//     address: {
//         city: "Ahmedabad",
//         pin: 382440,
//         location: {
//             lat: 30.32,
//             lng: 40.21,
//         },
//     },
// };//this is call Nesting
// user.address.location.lng;//This is called deep access
// let {lat,lng} = user.address.location;//this is called object sdestructuring


//Looping

// let obj = {
//     name: "Dhruv",
//     age: 20,
//     email: "barsenadhruv1280r@gmail.com"
// };

// for(let key in obj){
//     console.log(key,obj[key])
// }


//Copying onbjects

// let obj2 = {...obj};//same as arrays


//Deep cloning

// const user = {
//     name: "Dhruv",
//     age: 20,
//     address: {
//         city: "Ahmedabad",
//         pin: 382440,
//         location: {
//             lat: 30.32,
//             lng: 40.21,
//         },
//     },
// };

// let user2 = JSON.parse(JSON.stringify(user));//deep cloning


//Optional chaining and computer propeties

let role = "Admin";
const user = {
    name: "Dhruv",
    age: 20,
    address: {
        city: "Ahmedabad",
        pin: 382440,
        location: {
            lat: 30.32,
            lng: 40.21,
        },
    },
    [role]: "Dhruv",//computed properties
};

let user2 = JSON.parse(JSON.stringify(user));
user?.address?.location?.lat;//Optional chaining