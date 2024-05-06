//  Array 
 const myArr = [1,2,3,4,5] ; 
 console.log(myArr[0]) ; 

//  Array's Methods ---->>>
 console.log(myArr.length) ;

//  Pushing New Element at the end of the array ; 
 myArr.push(6) ; 
 myArr.push(7)
 console.log(myArr)

//  deleting array elements from the end of the array ; 
myArr.pop() ; 
console.log(myArr) ;

// inserting data at the fornt of the array  ;
myArr.unshift(9) ; 
console.log(myArr) ;

// deleting from front  : - 
myArr.shift() ;
console.log(myArr) ;

// We can ask Question to array  by using includes which returns the value in boolean from ; 

console.log(myArr.includes(9) ) ;

// indexOf -> tells the index of the item aviablein array ; 
console.log(myArr.indexOf(5)) ; 
console.log(myArr.indexOf(19)) ; 

//join -> helps us to bind the array in string format  ; 
const newArr = myArr.join() ; 
console.log(newArr) ;
console.log(myArr) ;


 //???Imp???
// slice vs splice  ; 

// slice-> It will not the alter the original array ; 
 console.log(myArr) ;
console.log(myArr.slice(1,3)) ; 
console.log(myArr) ;

// Splice ->it will cut the array from that index by altering original array ; 
console.log(myArr.splice(0,3)) ;
console.log(myArr);