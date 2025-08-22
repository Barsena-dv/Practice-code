//overall progress = 3seconds
//100%
let count = 0;
let sec = 10;
let wait = 3;
let progress = document.querySelector(".progress-fill");
let stat = document.querySelector(".status-text");

let startDownload = () => {
    setInterval(() => {
        if (count <= 99) {
            count++;
            progress.style.width = `${count}%`;
            progress.textContent = `${count}%`
        }
        if (count === 100) stat.textContent = "Downloded";
        if (count < 99 || count > 0) stat.textContent = "Downloding...";
    }, (sec * 1000) / 100);
}
setTimeout(() => {
    startDownload();
}, wait * 1000);