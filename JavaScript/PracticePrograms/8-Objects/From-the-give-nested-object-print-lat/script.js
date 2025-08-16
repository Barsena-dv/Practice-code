const user = {
    "name": "Dhruv",
    age: 20,
    address: {
        city: "Ahmedabad",
        pin: 382440,
        locations: {
            lat: 30.32,
            lng: 40.21,
        },
    },
};

//how can we prvent error if the keys are missing
let {lat,lng} = user?.address?.locations;
console.log(lat);

//Destructure city and latitude of the code
let{city} = user.address;

//destructure the key "name" as a variable calle name
let{ "name": name } = user;