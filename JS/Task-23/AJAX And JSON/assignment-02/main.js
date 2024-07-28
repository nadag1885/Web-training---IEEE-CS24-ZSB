let ajaxCall = new XMLHttpRequest();
ajaxCall.open("GET","./articles.json");
ajaxCall.send();
ajaxCall.onreadystatechange=function(){
    if(ajaxCall.readyState===4 & ajaxCall.status===200){ 
        console.log(this.responseText);
    }
}
ajaxCall.onloadend = function () {
    console.log("Data Loaded");
};