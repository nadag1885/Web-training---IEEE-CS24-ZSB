let input = document.querySelector("input");
let result = document.querySelector("div");
input.oninput = function(){
    result.textContent = `{${input.value}} USD Dollar = {${(input.value * 15.6).toFixed(2)}} Egyptian Pound`
}
document.querySelector("form").style.cssText=
"margin : 50px auto; align-items: center; border: 1px solid black; padding: 15px; width: fit-content;"
input.style.cssText = 
" margin : 10px auto; border: 1px solid #ddd; outline: none; padding: 10px; width: 280px;";
result.style.cssText= 
"margin : 10px auto; font-size: 20px"