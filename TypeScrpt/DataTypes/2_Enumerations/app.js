"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode["ABANDONED"] = "abandoned status code 505";
    StatusCode["NOTFOUND"] = "not fund status code 404";
})(StatusCode || (StatusCode = {}));
StatusCode.NOTFOUND;
//Any
//In any the typescript will work like the javascript will not give error on the overclocking of the datatypes on the variables.
let b; //: number;
b = 10;
b = "Dhruv"; //here should be error but it is not giving the error because it is set to the any.
b.toUpperCase; //because of which when you use these type of the methods where it should only work on a specific type of datatype it will still work without giving any kind of error which is wrong.
//unknown
//In unknown it is not know which type of data type is used although it will not give on over clocking of the dataypes but it will give the error where it is needed.
let c;
c = 6;
c = "Dhruv";
//c.toUpperCase//like here it will give error because you have not specified on which type of datatypes you want to use this method
if (typeof c === "string") {
    c.toUpperCase;
} //like this 
//also in the typescript you have to mention the data type of the returning value of the function and if it in not returning any value then you have to give it the void
//# sourceMappingURL=app.js.map