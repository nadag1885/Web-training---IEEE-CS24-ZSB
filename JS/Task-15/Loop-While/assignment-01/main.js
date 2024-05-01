let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
while(index<friends.length){
    if(!friends[index].startsWith("A") && typeof friends[index] === "string"){ 
      counter++;
      console.log(`${counter} => ${friends[index]}`);
      index++;
    }else{
      index++;

    }
    
}
// // Output
// "1 => Sayed"
// "2 => Mahmoud"

