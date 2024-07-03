let imgs=document.querySelectorAll("img");
imgs.forEach(img => {
    if(img.hasAttribute("alt"))
        img.alt="Old"; 
    else img.alt= "Elzero New";
})