let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let x=letter.length;
for(let i=--letter.length;i<friends.length;i++){
    if(friends[i][--letter.length]  === letter.toUpperCase()){
        continue;
    }
    console.log(`${x}=> ${friends[i]}`);
    x++;
}
// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"