let switcherLis = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.querySelectorAll(".cards div"));
switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});
// Remove Active Class From All Lis And Add To Current

function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}
// Manage Imgs
function manageImgs() {
    imgs.forEach((img) => {
        img.style.display = "none";
    });
    console.log( document.querySelectorAll(this.dataset.cat))
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    });
}
