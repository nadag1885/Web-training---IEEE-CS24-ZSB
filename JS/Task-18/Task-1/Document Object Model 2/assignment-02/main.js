let addclass = document.querySelectorAll("input")[0];
let removeclass = document.querySelectorAll("input")[1];
let element = document.querySelector('[title="Current"]')

let refrish=function(){
    let classesList=element.classList;
    let box=document.querySelector(".box");
    box.innerHTML=''
    classesList.forEach(ele => {
        let span = document.createElement("span");
        let spanText = document.createTextNode(ele);
        span.appendChild(spanText); 
        box.appendChild(span);
    });
}
//to show classes
refrish();

// add classes
addclass.onblur=function(){
    let addarr = addclass.value.toLowerCase().split(" ");
    addarr.forEach(ele => {
        element.classList.add(ele);
    });
    addclass.value="";
    refrish();
}  
// remove classes 
removeclass.onblur=function(){
    let remarr = removeclass.value.toLowerCase().split(" ");
    remarr.forEach(ele => {
        element.classList.remove(ele);
    });  
    removeclass.value="";
    refrish();
}  


