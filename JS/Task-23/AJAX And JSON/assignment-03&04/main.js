let myReq = new XMLHttpRequest();
myReq.open("GET","./articles.json");
myReq.send();
myReq.onreadystatechange=function(){
    if(myReq.readyState===4 & myReq.status===200){ 
        let mainData = JSON.parse(this.responseText);
        for(let i=0;i<mainData.length;i++){
            mainData[i].category="all"
        }
        console.log(mainData)
        let updatedData=JSON.stringify(mainData);
        console.log("#############");
        console.log(updatedData);
        let data = document.createElement("div");
        for(let i=0;i<mainData.length;i++){
            let h2 = document.createElement("h2");
            let title = document.createTextNode(`${mainData[i].title}`);
            h2.appendChild(title);
            data.appendChild(h2);
            let pArticle= document.createElement("p");
            let Article = document.createTextNode(`${mainData[i].body}`)
            pArticle.appendChild(Article);
            data.appendChild(pArticle);
            let pAuthor= document.createElement("p");
            let Author = document.createTextNode(`Author: ${mainData[i].author}`)
            pAuthor.appendChild(Author); 
            data.appendChild(pAuthor);
            let pCategory= document.createElement("p");
            let Category = document.createTextNode(`Category: ${mainData[i].category}`)
            pCategory.appendChild(Category); 
            data.appendChild(pCategory);
        }
        document.body.appendChild(data)
    }
}