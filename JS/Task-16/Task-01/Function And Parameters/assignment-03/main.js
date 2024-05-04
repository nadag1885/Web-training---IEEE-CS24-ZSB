function ageInTime(theAge) {
    // Your Code Here
    if(theAge >10 && theAge <100){
        console.log(`${theAge *12} Months`);
        console.log(`${theAge *365} Days`);
        console.log(`${theAge * 365 * 24} Hours`);
        console.log(`${theAge * 365 * 24 * 60} mintues`);
        console.log(`${theAge * 365 * 24 * 60 * 60} seconds`);
    }else console.log("Age Out Of Range")
}

  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months