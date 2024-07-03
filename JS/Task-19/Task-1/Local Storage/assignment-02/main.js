let thename = document.getElementById("name");
let age = document.getElementById("age");
let city = document.getElementById("city");   
let code = document.getElementById("code");

thename.addEventListener("change",()=>{
    window.sessionStorage.setItem("name",thename.value); 
})
age.addEventListener("change",()=>{ 
    window.sessionStorage.setItem("age", age.value);

})
city.addEventListener("change",()=>{ 
    window.sessionStorage.setItem("city", city.value);
    
})
code.addEventListener("change",()=>{ 
    window.sessionStorage.setItem("code", code.value);
    
}) 
thename.value = window.sessionStorage.getItem("name") ;  
age.value = window.sessionStorage.getItem("name") ; 
city.value = window.sessionStorage.getItem("city") ; 
code.value = window.sessionStorage.getItem("code") ; 