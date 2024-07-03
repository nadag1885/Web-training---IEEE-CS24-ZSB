let count = document.querySelector("div");
let elzero = document.querySelector("a")
let counter = setInterval(countdown, 1000);
function countdown(){
    count.innerHTML -=1;
    if(count.innerHTML==0)
        elzero.click();
}