let index = 10;
let jump = 2;

for (let i=index;i>jump;i-=jump) {
  // Write Your Code Here
    if(i==jump){
        break;
    }
    console.log(i);
}

// Output
// 10
// 8
// 6
// 4