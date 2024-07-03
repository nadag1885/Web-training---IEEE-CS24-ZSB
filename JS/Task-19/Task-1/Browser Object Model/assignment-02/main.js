let popup = document.querySelector(".popup");
setTimeout(() => {
    popup.classList.remove("hide")
}, 5000);

let close = document.querySelector("button");
close.addEventListener("click", () => 
    popup.classList.add("hide")
);