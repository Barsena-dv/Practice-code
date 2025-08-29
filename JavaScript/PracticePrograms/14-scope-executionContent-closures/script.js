function createToaster(config){
    return function(notification){
        let div = document.createElement("div");
        div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none ${config.positionX === "right" ? "right-10" : "left-10"} ${config.positionY === "top" ? "top-10" : "bottom-10"}`;

        div.textContent = notification;
        document.querySelector(".parent").appendChild(div);

        if(config.positionX !== "left" || config.positionY !== "top"){
            document.querySelector(".parent").classList.add("fixed");
            document.querySelector(".parent").className +=
            `${config.positionX === "right" ? " right-5" : " left-5"} ${config.positionY === "bottom" ? " bottom-5" : " top-5"} ${config.positionX === "right" ? "items-end" : "items-start"}`
        }

        setTimeout(() => {
            document.querySelector(".parent").removeChild(div);
        }, config.duration * 1000);
    };
}

let toaster = createToaster({
    positionX:"right",
    positionY:"top",
    theme:"dark",
    duration: 3,
});

toaster("This is a dummy notification");
setTimeout(()=>{
    toaster("hello!");
}, 2000)