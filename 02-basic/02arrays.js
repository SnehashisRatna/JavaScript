// Concat - > Combines 2 or more array and return a new array ; 
//merging
const mcu = [23 , 45 , 64] ; 
const dc = [ 44 , 11 , 22] ; 

const newArr = mcu.concat(dc)   ; 
console.log(newArr) ; 


// spread operator ; 
// Kach ka glass like upar se chod do -> It Will spread out ; 
// No limitation

const allNew = [...mcu , ...dc] ; 
console.log(allNew); 
console.log(allNew.length);


const cool = [...allNew , ...mcu , ...dc]; 
console.log(cool) ;
console.log(cool.length) ;

// flat ->Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. 

// cool.flat(Infinity) ;

console.log(Array.isArray("Snehashis")) ;   

// from -> it will creat array from anything ; 
console.log(Array.from("Snehashis")) ;   

// interesting  : ???imp???
console.log(Array.from({name:"Sneha"})) ;   // will throw a empty array  , need to spesify about keys and values ; 

// of ->Returns a new array from a set of elements.
let s1 = 100 ; 
let s2 = 200  ;
let s3 = 300 ; 
console.log(Array.of(s1,s2,s3)) ; 

