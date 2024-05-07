// Objects Literals ;
// Decartion of obejcts  

// Singleton object
 const userAcc = new Object()  ;

// non singleton Objects  ; 

  const user = {
    name : "Sneha",
    age:18 , 
    add:"Bbsr" , 
    email:"abc@gmail.com" 
  }

//   Accessing ; 
 console.log(user.email) ; 
 console.log(user["email"]) ; 

//  freeze - > it will freeze the object after that we can't change the object ; 
// user.email = "snehashis@gmail.com" ; 
// Object.freeze(user) ; 
// user.email = "Hello@google.com"  ;
// console.log(user) ;  

// Function in object ; 
//  In js we can treat function as a variables  ; 
user.greeting = function(){
    console.log(`Hello ${this.name}`) ; // this keyword - > same object ko referecnce karne kiliye hum "this use karte hain;"
}

console.log(user.greeting()) ;

//   Nesting Objects ; 

const regularUser = {
     id : 7 ,
     fullName:{
        userFullName :{
            firstName : "Sneha" ,
            lastName : "Ratna"
        }
     }
}

console.log(regularUser.fullName) ;
console.log(regularUser.fullName.userFullName) ;
console.log(regularUser.fullName.userFullName.firstName) ;
console.log(regularUser.fullName.userFullName.lastName) ;
