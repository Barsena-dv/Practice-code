const fs = require("fs");

fs.writeFile("hey.txt","hii hello kaise ho",function(err){
    if(err) console.log(err);
    else console.log("done");
})