let name  = "Sneha" ; 
let repoCnt = 50  ;
console.log(` My name is ${name} and my repocount is ${repoCnt}`) ; 

const gameName = new String("Snehashis") ;


console.log(gameName.__proto__) ;
console.log(gameName[0]) ; 
console.log(gameName.length) ;
console.log(gameName.toUpperCase())  ;
console.log(gameName.charAt(4)) ; 
console.log(gameName.indexOf('e')) ;

// 1
const newStr = gameName.slice(0, 5) ;
console.log(newStr)  ;
// 2
const vs = "    Sneha    " ; 
console.log(vs) ; 
console.log(vs.trim()) ; 
// 3
const value = "Snahashis Sahoo" ; 
console.log(value) ; 
console.log(value.replace("Sahoo" , "Ratna")) ; 
console.log(value.includes('sne')) ; 

// 4 -->Split() ; 
let val = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, laborum!" ; 

console.log(val.split('')) ; 
console.log(val.split(' ')) ; 
console.log(val.split('-')) ; 
console.log(val.split('a')) ; 


