//Event listner
//To add Event Listner you first have to select the element on which you have to add the event.Then add the event listner on that by '.addEventListner' we have to fill tow thing in it first will be the name of the event and the second will be the function you want to run on the event
// let h1 = document.querySelector("h1");
// h1.addEventListener("click",() =>{
//     h1.style.color = "red";
// });
// let p = document.querySelector("p");
// p.addEventListener("click",() =>{
//     p.style.color = "green";
// });//like here
// p.addEventListener("dblclick",() =>{
//     p.style.color = "yellow";
// });//like here


//Few types of the the evenlistner

//Input
let input = document.querySelector("input");
input.addEventListener("input",(inp) => {
    if(inp.data !== null){
        console.log(inp.data)
    };
});

//Change event
//This will run when there will be a change in the select,textarea or input.
let select = document.querySelector("select");
let dev = document.querySelector("#device");
select.addEventListener("change",(dets) => {
    dev.textContent = `${dets.target.value} Device Selected`
});


//Mouse over And mouse move
let abcd = document.querySelector("#abcd");
// abcd.addEventListener("mouseover", ()=> {
//     abcd.style.backgroundColor = "yellow";
// });
// abcd.addEventListener("mouseout", ()=> {
//     abcd.style.backgroundColor = "red";
// });

// window.addEventListener("mousemove",(data) => {
//     abcd.style.top = data.clientY + "px";
//     abcd.style.left = data.clientX + "px";
// });


//Event Bubbling

//When there is an event and there is not a listner on that then the event will search for the listnere on the parent if it will not even there then it will search its parent just like that it will go upwards for that until it will get the listner to operate that is called Event Bubbling

//Event Capturing

//Whenever you do a event or clicking that event will always go in the two flows
//Phase 1(capture):Event will go down from top level element.
//Phase 2(bubble):Event will go toward the parenty element.
//And phase 1 always occurs 1st but it always remains Off by default if we toggle On it then the phase 1 will occur