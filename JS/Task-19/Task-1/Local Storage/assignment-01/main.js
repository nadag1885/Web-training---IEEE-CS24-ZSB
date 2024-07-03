let font = document.getElementById("font");
let color = document.getElementById("colors");
let size = document.getElementById("size");

if (window.localStorage.getItem("font")) {
    document.body.style.fontFamily = window.localStorage.getItem("font");
    font.value = window.localStorage.getItem("font");
    }
if(window.localStorage.getItem("color")){
    document.body.style.color= window.localStorage.getItem("color");
    color.value=window.localStorage.getItem("color");
}
if(window.localStorage.getItem("size")){
    document.body.style.fontSize= window.localStorage.getItem("size");
    size.value= window.localStorage.getItem("size");   
}

font.addEventListener("change",()=>{
    window.localStorage.setItem("font",font.value);
    document.body.style.fontFamily = font.value;
});
color.addEventListener("change",()=>{
    window.localStorage.setItem("color",color.value);
    document.body.style.color=color.value;
});
size.addEventListener("change",()=>{
    window.localStorage.setItem("size",size.value);
    document.body.style.fontSize = size.value;
});
