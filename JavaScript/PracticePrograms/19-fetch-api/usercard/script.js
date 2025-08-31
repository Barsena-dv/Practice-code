function getUsers() {
    const container = document.querySelector("#container");
    container.innerHTML = ""; // clear old cards

    // Add a loading animation (spinner)
    const loader = document.createElement("div");
    loader.className = "flex justify-center items-center w-full py-6";
    loader.innerHTML = `
    <div class="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>`;
    container.appendChild(loader);

    fetch("https://randomuser.me/api/?results=3")
        .then(raw => raw.json())
        .then(data => {
            container.innerHTML = ""; // remove loader

            data.results.forEach(user => {
                const card = document.createElement("div");
                card.className = "bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full transform transition-all duration-300 hover:scale-105 opacity-0 translate-y-5";

                const flexContainer = document.createElement("div");
                flexContainer.className = "flex items-center space-x-4";

                const img = document.createElement("img");
                img.className = "w-16 h-16 rounded-full object-cover border-2 border-gray-700";
                img.src = user.picture.large;
                img.alt = "User Avatar";

                const userInfo = document.createElement("div");

                const name = document.createElement("h2");
                name.className = "text-xl font-semibold text-gray-100";
                name.textContent = `${user.name.first} ${user.name.last}`;

                const email = document.createElement("p");
                email.className = "text-gray-400";
                email.textContent = user.email;

                userInfo.append(name, email);
                flexContainer.append(img, userInfo);

                const buttonContainer = document.createElement("div");
                buttonContainer.className = "mt-4";

                const button = document.createElement("button");
                button.className = "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700";
                button.textContent = "View Profile";

                buttonContainer.append(button);

                card.append(flexContainer, buttonContainer);

                container.appendChild(card);

                // Smooth fade-in effect
                requestAnimationFrame(() => {
                    card.classList.remove("opacity-0", "translate-y-5");
                    card.classList.add("opacity-100", "translate-y-0");
                });
            });
        });
}

getUsers();

let refreshBtn = document.querySelector("#refreshBtn");
refreshBtn.addEventListener("click", function () {
    getUsers(); // instead of hard reload
});
