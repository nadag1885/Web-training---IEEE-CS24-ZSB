let count = document.querySelector("div");
let counter = setInterval(countdown, 1000);
function countdown(){
    count.innerHTML -=1;
    if(count.innerHTML==0)
        clearInterval(counter);
}