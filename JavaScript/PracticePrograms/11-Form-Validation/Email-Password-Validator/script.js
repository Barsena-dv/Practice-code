let nm = document.querySelector("#name");
let form = document.querySelector("form");
let hide = document.querySelector("#hide");
let unm = document.querySelector("#username");
let mail = document.querySelector("#email");
let pass = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
form.addEventListener("input", () => {
    // const rules = [
    //     {regex: /^[A-Za-z]{3,}(?: [A-Za-z]+)*$/,value: nm.value.trim() },
    //     {regex:  /^(?=.{3,16}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, value: unm.value.trim() },
    //     {regex:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/, value: mail.value.trim()},
    //     {regex:  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, value: pass.value.trim()}
    // ]
    // let invalid = rules.every(rule => !rule.regex.test(rule.value));

    // if(invalid){
    //     hide.style.display = "inline";
    // }
    // else{
    //     hide.style.display = "none";
    // }

    // if(pass !== conpass){
    //     hide.style.display = "inline";
    // }
    // else{
    //     hide.style.display = "none";
    // }
    let invalid = false;
    const rnm = /^[A-Za-z]{3,}(?: [A-Za-z]+)*$/;
    const un = /^(?=.{3,16}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
    const remail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    const repass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!rnm.test(nm.value.trim())) invalid = true;
    if(!un.test(unm.value.trim())) invalid = true;
    if(!remail.test(mail.value.trim())) invalid = true;
    if(!repass.test(pass.value.trim())) invalid = true;
    if(pass.value.trim() !== confirmPassword.value.trim()) invalid = true;
    hide.style.display = invalid ? "inline" : "none";
});
form.addEventListener("submit",(dts) => {
    dts.preventDefault();
});