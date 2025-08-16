const courses = {
    title: "JavaScript",
    duration: "4 weeks"
};

// for(let key in courses){
//     console.log(key);
// };

Object.entries(courses).forEach( (val) => {
    console.log(val[0] + ":" + val[1]);
});