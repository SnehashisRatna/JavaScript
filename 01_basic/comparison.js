//// try to avoid these type of comaprison , it can confuse us ;

console.log(null > 0) ; //->false
console.log(null == 0) ;//->false
console.log(null >= 0) ;//->true

console.log(undefined > 0); // ->false
console.log(undefined == 0);//->false
console.log(undefined >= 0);//->false

// The reason is that an eauality check(==) and comparison (>,<,>=, <=) work differently . 
//Comparison convert "null" to a number , treat it as 0 , 
//That's why ( null >= 0) is true and (null>0) is false ; 




// Interview question

console.log("2" == 2) ; // -> true
//It's only check for value not datatype ; 


console.log("2"=== 2 ) ; //-> false
// It's check for both value and datatype as well as ;
