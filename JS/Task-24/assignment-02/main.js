fetch("./data.json")
.then((data)=>{ 
    let result = data.json() 
    return result
    })
.then((result)=>{  
        result.length = 5;
        return result;
    })
.then((result)=>{
    for(let i =0 ; i<result.length;i++){
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        let htext = document.createTextNode(result[i].title);
        h2.appendChild(htext);
        div.appendChild(h2)
        let p = document.createElement("p");
        let ptext = document.createTextNode(result[i].description);
        p.appendChild(ptext)
        div.appendChild(p);
        document.body.appendChild(div);
    }})