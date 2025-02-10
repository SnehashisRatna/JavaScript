// const numb = [1,2,3,4,5,6,7,8,9,10] ;





// for(let i = 0 ;i < numb.length ;i++){
//     console.log(`The elemnet available in array is ${numb[i]}`);
// }

// console.log(typeof(numb));


// console.log(numb.join(" and ") );

// // pop
// console.log("pop");
// let p = numb.pop();
// console.log(p);
// console.log(numb);

// // push 
// console.log("push");
// numb.push(34);
// console.log(numb);

// // Shift
// console.log("Shift");
// let r= numb.shift();
// console.log(r);
// console.log(numb);



// // Unshift
// console.log("Unshift");

// let c = numb.unshift(23);
// console.log(`retuns the new array lenght : ${c}`);
// console.log(numb);


// // Concatination

// let numb2 = [12,234,25,343145,13465134,13541,5123512,123];

// console.log(numb.concat(numb2));

// // Sort


// // Compare function in asecnding order .

// let compare = (a,b)=> {
//   return a-b ;
// }


// console.log(numb2.sort());  // it sorts in a alpahbetic order 

// console.log(numb2.sort(compare));


// let arr =[1,2,3,4,5];

// let b = arr.splice(2,1,10,15,20);

// console.log(b);
// console.log(arr);


// let arr = [1,2,3,4,5,5,6,6,7,8,8,9];

// for(let i = 0;i<arr.length ;i++){
//         console.log(arr[i]);
// }

// // Imp Concept of ForEach 
// console.log("ForEach Concept");
// arr.forEach((ele)=>{
//     console.log(ele*ele);
// })

// // Array From 

// console.log('array From ');

// let name  = "Snehashis";

// let arr2 = Array.from(name);

// console.log(arr2);

// // For ....of Loop

// console.log("For Of loop");

// for (const i of arr2) {
//     console.log(i);
    
// }


// // For in Loop -> which return us the keys or index of the object and array respectively
// console.log("for in Loop");

// for(let key in arr2){
//     console.log(key);
// }



// //Map 
  
// console.log("map");
// let ar = [12,34,554,232]
// ar.map((value ,index ,Array)=>{
//     console.log( value ,index ,Array);
  
// })
// // Filter method in array 
// console.log("filter Method");

// let brr = [1 ,34,231, 12, 24, 231,121, 12, 23, 24, 56 ,67 ,87,  92, 34 ,34,43,23,31,3,5,56] ;

// let c = brr.filter((a)=>{
//     return  a < 50;
// }) ;
//  console.log(c);



// Array Reduce Method 

let arr = [1,2,3,4,5,6];

const reduce_func = (a,b)=>{
   
    return a*b ;
} ;


let ar = arr.reduce(reduce_func)
console.log(ar);