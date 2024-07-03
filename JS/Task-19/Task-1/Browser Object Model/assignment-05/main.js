let count = document.querySelector("div");
let elzero = document.querySelector("a")
let counter = setInterval(countdown, 1000);
function countdown(){
    count.innerHTML -=1;
    if(count.innerHTML==0){
        window.open("https://elzero.org/","_blank","width=600,height=500,left=300,top=200");
        clearInterval(counter);
    }
}