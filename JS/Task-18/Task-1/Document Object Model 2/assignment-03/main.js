document.querySelector("p").remove();
let element = document.querySelector(".our-element");
let prediv = document.createElement("div");
prediv.setAttribute("class","start"); 
prediv.setAttribute("title","Start Element");
prediv.setAttribute("data-value","Start");
element.before(prediv);
let afterdiv = document.createElement("div");
afterdiv.setAttribute("class","end"); 
afterdiv.setAttribute("title","end Element");
afterdiv.setAttribute("data-value","end");
element.after(afterdiv)