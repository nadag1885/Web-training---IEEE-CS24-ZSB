let start = 0;
let swappedName = "elZerO";
let name=[];
for(let i=start;i<swappedName.length;i++){
    if(swappedName[i]>='a' && swappedName[i]<='z'){
        name[i]=swappedName[i].toUpperCase();
    }else if(swappedName[i]>='A' && swappedName[i]<='Z'){
        name[i]=swappedName[i].toLowerCase();
    }
}
console.log(name.join(""));
// Output
// "ELzERo"