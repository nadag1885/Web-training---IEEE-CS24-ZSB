let newsrc = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"; 
let newalt = "Elzero Logo"; 
let imgs = document.querySelectorAll("img");
imgs.forEach(img => {  
    img.src = newsrc;
    img.alt = newalt;  
    img.style.backgroundColor="black";
});