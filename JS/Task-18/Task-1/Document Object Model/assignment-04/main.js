let one = document.querySelector(".one");
let two = document.querySelector(".two");
one.title="one";
two.title="two";

let txt1=one.textContent;
let txt2=two.textContent;
one.textContent = txt2;
two.textContent = `${txt1} 2`