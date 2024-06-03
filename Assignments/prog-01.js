// Vowels Counting 
const vowelsCounting =(str)=>{
    str = str.toUpperCase();
    let cnt = 0 ;
    // This for loop will give each letter of the string ;
    for (let val of str){
        if(val == 'A' || val == 'E' || val == 'I' || val == 'O' || val == 'U'){
            cnt++ ;
        }
    }
    return cnt ;
}

console.log(vowelsCounting("Silan Software Pvt Ltd")) ;