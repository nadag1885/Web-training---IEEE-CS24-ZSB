document.addEventListener("click",function(e){
    if(e.target){
        let ele = e.target
        console.log(`This Is ${ele.tagName}`);
    }
})