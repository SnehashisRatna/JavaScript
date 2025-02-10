// for(let i =0 ; i<5 ;i++){
//     console.log(i);
// }

// Sum of 1st n numbers

let sum =0; 

for (let i = 1; i <=10; i++) {
    
    console.log(` ${sum} + ${i} = ${sum+i} `);   // Template literall
    sum += i ;
}
console.log(sum);



console.log("Factorial problem");

// Factorial
let fact =1 ;

for(let i = 6;i>=1;i--){
   fact *= i;
   console.log(fact); 
}


// For in loop only used in objects

let obj = {
    sneha : 98,
    shubhu : 90,
    shubham :78, 
    akash : 59,
    tanmaya : 80
}

for(let a in obj){
    console.log(`Marks of ${a} is ${obj[a]}`);
}

// for of loop

let arr = [1,2,3,4,5];

for(let i of arr){
    console.log(i+2);
}

// While loops

console.log("while loops");
let i=1;
let summ=0;
while( i<=10){
    console.log(i);
    summ += i;
    
    i++;
}
console.log(summ);