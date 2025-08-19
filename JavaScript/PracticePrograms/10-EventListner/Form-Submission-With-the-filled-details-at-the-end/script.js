let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", (dts)=>{
    dts.preventDefault();
    let card = document.createElement("div");
    card.classList.add("card");
    let profile = document.createElement("div");
    profile.classList.add("profile");
    let img = document.createElement("img");
    img.setAttribute("src",inputs[4].value);
    let h3 = document.createElement("h3");
    h3.textContent = inputs[0].value;
    let occ = document.createElement("h5");
    occ.textContent = inputs[2].value
    let age = document.createElement("p");
    age.textContent = inputs[1].value;
    let date = document.createElement("p");
    date.textContent = inputs[5].value;
    let mail = document.createElement("p");
    mail.textContent = inputs[3].value;

    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(occ);
    card.appendChild(age);
    card.appendChild(date);
    card.appendChild(mail);

    main.appendChild(card);
    
    
    inputs.forEach((inp) => {
        if(inp.type !== "submit"){
            inp.value = "";
        }
    });
});