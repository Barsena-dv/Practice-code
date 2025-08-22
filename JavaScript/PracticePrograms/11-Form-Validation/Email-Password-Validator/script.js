let nm = document.querySelector("#name");
let form = document.querySelector("form");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
form.addEventListener("input", () => {

    document.querySelector("#nameError").textContent = "";
    document.querySelector("#usernameError").textContent = "";
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";
    document.querySelector("#confirmPasswordError").textContent = "";

    const nmRegex = /^[A-Za-z]{3,}(?: [A-Za-z]+)*$/;
    const usernameRegex = /^(?=.{3,16}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let nmAns = nmRegex.test(nm.value.trim());
    let usernameAns = usernameRegex.test(username.value.trim());
    let emailAns = emailRegex.test(email.value.trim());
    let passwordAns = passwordRegex.test(password.value.trim());

    let isValid = true;

    if(!nmAns){
        document.querySelector("#nameError").textContent = "Invalid name — sirf letters, min 3 characters."
        document.querySelector("#nameError").style.display = "inline";
        isValid = false;
    }else{
        document.querySelector("#nameError").style.display = "none";
    }

    if(!usernameAns){
        document.querySelector("#usernameError").textContent = "Invalid username — 3–16 chars, letters/numbers/._ only. Start/end me . ya _ mat ho, double ../__ avoid karo."
        document.querySelector("#usernameError").style.display = "inline";
        isValid = false;
    }else{
        document.querySelector("#usernameError").style.display = "none";
    }

    if(!emailAns){
        document.querySelector("#emailError").textContent = "Invalid email — format name@domain.com follow karo (spaces/extra @ not allowed)."
        document.querySelector("#emailError").style.display = "inline";
        isValid = false;
    }else{
        document.querySelector("#emailError").style.display = "none";
    }

    if(!passwordAns){
        document.querySelector("#passwordError").textContent = "Weak password — min 8 chars, mix UPPER/lower, ek number & ek symbol include karo."
        document.querySelector("#passwordError").style.display = "inline";
        isValid = false;
    }else{
        document.querySelector("#passwordError").style.display = "none";
    }
    
    if(password.value !== confirmPassword.value){
        document.querySelector("#confirmPasswordError").textContent = "Passwords don’t match."
        document.querySelector("#confirmPasswordError").style.display = "inline";
        isValid = false;
    }else{
        document.querySelector("#confirmPasswordError").style.display = "none";
    }

    if(isValid){
        alert("Congratulation! your form is submitted");
    }
});
form.addEventListener("submit", (e) => {
    e.preventDefault();
});