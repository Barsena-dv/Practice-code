function applyTheme(theme) {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
}

function getPreferredTheme() {
    // Use saved theme if exists, otherwise system preference
    return localStorage.getItem("theme") ||
           (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

// Initial load
applyTheme(getPreferredTheme());

// React to system changes (only if user hasn’t manually chosen a theme yet)
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
        applyTheme(getPreferredTheme());
    }
});

// Toggle button
document.querySelector("#toggleTheme").addEventListener("click", () => {
    const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
    applyTheme(newTheme);
});
