let btn = document.querySelector("#btn");
let inp = document.querySelector("#filinp")
btn.addEventListener("click",() => {
    inp.click();
})
inp.addEventListener("change",(dets)=>{
    // btn.textContent = dets.target?.files[0]?.name;
    const file = dets.target.files[0]
    if(file){
        btn.textContent = file.name
    }
});