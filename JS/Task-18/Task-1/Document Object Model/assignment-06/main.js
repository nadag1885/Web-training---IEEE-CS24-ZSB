const elements = document.querySelector('[name="elements"]');
console.log(elements);
const txt = document.querySelector('[type="text"]'); 
console.log(txt);
const btn=document.querySelector('input[type="submit"]');
console.log(btn)
// let select = document.querySelector("[name = 'type']");  
const select = document.getElementsByTagName('select')[0];
const result = document.querySelector('div.results');
document.forms[0].onsubmit = function(e){ 
    e.preventDefault();

    console.log("sub")
    result.innerHTML = "";        
        if (txt.value == '') {
    txt.value = select.value;
    console.log("set")
}
    for(let i=0;i<elements.value;i++){
        console.log(i)
        const ele=document.createElement(select.value);
        console.log("created")
        ele.className = "box"; 
        console.log("set class ")
        ele.setAttribute("title", "Element");
        console.log("set tit")
        ele.id=`id-${i + 1}`;
        ele.innerHTML=txt.value;
        result.appendChild(ele);
        console.log("end")
    }  
}
   
 
 
// const numInput = document.querySelector('[name="elements"]');
// const textInput = document.querySelector('[type="text"]');
// const select = document.getElementsByTagName('select')[0];
// const submitInput = document.querySelector('input[type="submit"]');
// const holderDiv = document.querySelector('div.results')


// document.forms[0].onsubmit = function (e) {
//   holderDiv.innerHTML = "";
//   if (textInput.value == '') {
//     textInput.value = select.value;
//   }

//     for (let i = 1; i <= numInput.value; i++) {
      
//       const newElement = document.createElement(select.value);
//       newElement.className = "box";
//       newElement.title = "Element";
//       newElement.id = `id-${i}`;
//       newElement.innerHTML = textInput.value;
  
//       holderDiv.appendChild(newElement);
    
//   }
//   e.preventDefault();
// }