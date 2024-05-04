function specialMix(...data) {
    // Your Code Here
    let sum =0; 
    let flage = false;
    for(let i=0 ; i<data.length;i++){
        if(!isNaN(parseInt(data[i]))){
            flage=true;
            sum+=parseInt(data[i])
        }
    }
    return flage==false?"All Is Strings":sum;
}

  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings