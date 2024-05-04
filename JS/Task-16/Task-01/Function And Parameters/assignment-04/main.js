function checkStatus(a, b, c) {
    // Your Code Here
    let name ,age ,status;
    typeof a == "string" ? name =a : typeof b == "string" ? name = b : name =c ;
    typeof a == "number" ? age =a : typeof b == "number" ? age = b : age =c ;
    typeof a == "boolean" ? status =a : typeof b == "boolean" ? status = b : status =c ;
    let message;
    if (status === true) {
        console.log(`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`);
    } else if (status === false) {
        console.log(`Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`);
    }

    return message;
}
  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"