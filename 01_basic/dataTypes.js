"use strict" // Treat all js code as newer version  ;

// alert(3+3)  ; This will throw a error beacause we  are using nodejs , Not Broswer ; 

// Code readability should be high ; 

 console.log(typeof undefined) ; 
 console.log(typeof null) ; 

//  Primitive Type -->(Call by Value)
// String , Number, Boolean , Null  , Undefined  ,Symbol , BigInt ; 

let bigNub = 1223456567845673n ;
console.log(typeof bigNub) ;

// Non Primitive Type(Call by Reference) --->
// (1)Array
 const heros = ["Tony" , "Dormamu" , "Kalia"]  ; 
console.log(typeof heros) ;
// Objects 

let myObj = {
    name: "Sneha" ,
    age : 23 
}
console.log(myObj) ; 
console.log(typeof myObj) ; 
// Function ; 

let func  = function(){
    console.log("Hello Wolrd");
}



