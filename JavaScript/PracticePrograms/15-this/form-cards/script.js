let form = document.querySelector("form");
let userName = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let pic = document.querySelector("#pic");

const userManager = {
    users: [],
    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this))
    },
    submitForm: function (e) {
        e.preventDefault();
        this.addUsers();
    },
    addUsers: function () {
        this.users.push({
            userName: userName.value,
            role: role.value,
            bio: bio.value,
            pic: pic.value,
        });
        this.renderUi();
        form.reset();
    },
    renderUi: function () {
        document.querySelector(".card-container").innerHTML = "";
        this.users.forEach((user, index) => {

            // Create card
            const card = document.createElement("div");
            card.className = "card";

            // Create image
            const img = document.createElement("img");
            img.src = user.pic;
            img.alt = "User Photo";

            // Create h3
            const h3 = document.createElement("h3");
            h3.textContent = user.userName;

            // Create h4
            const h4 = document.createElement("h4");
            h4.textContent = user.role;

            // Create paragraph
            const p = document.createElement("p");
            p.textContent = user.bio;

            // Append all children to card
            card.appendChild(img);
            card.appendChild(h3);
            card.appendChild(h4);
            card.appendChild(p);

            card.addEventListener("click", () => {
                this.removeUser(index);
            });

            // card.innerHTML = `
            //     <img src="${user.pic}" alt="User Photo">
            //     <h3>${user.userName}</h3>
            //     <h4>${user.role}</h4>
            //     <p>${user.bio}</p>
            // `;

            // Append card to container
            document.querySelector(".card-container").appendChild(card);

        });
    },
    removeUser: function (index) {
        this.users.splice(index, 1);
        this.renderUi();
    },
}

userManager.init();