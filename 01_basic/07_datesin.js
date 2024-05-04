// Dates 

// Creating Obj for dates ; 
let myDate = new Date() ; 
console.log(myDate.toISOString()) ; 
  // o/p-> 2024-05-04T19:36:07.348Z
  
  console.log(myDate.toLocaleString()) ; 
  // o/p-> 5/5/2024, 1:06:07 AM

console.log(myDate.toDateString()) ; 
// o/p-> Sun May 05 2024

console.log(myDate.toTimeString()) ; 
// o/p-> 01:18:09 GMT+0530 (India Standard Time)
  
console.log(myDate.toLocaleDateString()) ; 
// o/p-> 5/5/2024


console.log(myDate.toLocaleTimeString()) ; 
// o/p-> 1:06:07 AM

console.log(myDate.toString()) ; 
// o/p-> Sun May 05 2024 01:06:07 GMT+0530 (India Standard Time)

let myCreatedDate = new Date("2024-05-12") ; 
console.log(myCreatedDate.toLocaleString()) ; 


// To get Time Stamp ; 

let myTimeStamp = Date.now() ; 
console.log(myTimeStamp) ; 
//OP-> 1714852404632 
//  it will give us a milli-second counted number from jan-1 1970 ; 

console.log(myCreatedDate.getTime()) ; 
console.log(myCreatedDate.getFullYear()) ; 
console.log(myCreatedDate.getSeconds()+1) ; 
console.log(myCreatedDate.getDay()) ; 
console.log(myCreatedDate.getDate()) ; 
console.log(myCreatedDate.getHours()) ; 
console.log(myCreatedDate.getMonth()+1) ; 
console.log(myCreatedDate.getTimezoneOffset()) ; 
