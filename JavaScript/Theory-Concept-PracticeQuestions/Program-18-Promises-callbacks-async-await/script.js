//sync async

//the code which will run line by line that is called sync

//and the code which will be ready for line by line running that is called async

//Callback and Callback hell
function kuchhDerBaadChalunga(fnc){
    setTimeout(fnc, Math.floor(Math.random() * 10) * 1000);
};
kuchhDerBaadChalunga(() => {
    console.log("hey");
});//This is called callback.When you pass a function in another funciton's parameter then the function with the parameter is called callback

//Callback hell
function profileLekarAao(username,cb){
    setTimeout(() => {
        console.log(`profile fetched ${username}`)
        cb({_id:1222, username, age:20, email:"abd@gmail.com"});
    }, 2000);
}

function sarePostLekarAao(id,cb){
    setTimeout(() => {
        cb({_id:id, posts:["hey","hello","greetings"]})
    }, 3000);
}

function savedPostsNikalo(id,cb){
    setTimeout(() => {
        cb({_id: id, saved:[1,2,2,3,4,5,,132,523]});
    }, 3000);
}

profileLekarAao("Dhruv",function(profileData){
    console.log(profileData)
    sarePostLekarAao(profileData._id, function(posts){
        console.log(posts);
        savedPostsNikalo(profileData._id, function(saved){
            console.log(saved);
        });
    });
});//This is called callback hell.


//Promises
let pr = new Promise(function(res, rej){
    setTimeout(() => {
        let rn = Math.floor(Math.random()*10);
        if(rn < 5) res("Resolved with" + rn);
        else rej("Rejected with" + rn);
    }, 3000);
});
// pr
// .then( function (val) {
//     console.log(val);
// }).catch( function (val) {
//     console.log(val);
// });Promise

//async/await
async function abcd(){
    try{
        let val = await pr;
        console.log(val);
    }catch (err){
        console.log(val);
    };
};//async/await

abcd();