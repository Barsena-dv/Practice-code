let nm = document.querySelector("#name");
let form = document.querySelector("form");
let hide = document.querySelector("#hide");
let mail = document.querySelector("#email");
form.addEventListener("input", () => {
    if(nm.value.trim().length <= 2){
        hide.style.display = "inline";
    }
    else{
        hide.style.display = "none";
    }
});
form.addEventListener("submit", (dts) => {
    dts.preventDefault();
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    let ans = regex.test("mail");
    console.log(ans);

})