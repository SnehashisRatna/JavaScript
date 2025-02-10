

let num = Math.round(Math.random()*100) ;

let  inp ;

let score =100 ;

while (inp != num){
    score-- ;
   inp = prompt("Enter a Number (Between 1  to 100 ):");
   inp = Number.parseInt(inp);

   if(inp == num){
    alert("Congratulation ! you have entered the correct Number . Here is your winning gift");
    alert(`You have guess the correct answer in ${100- score} chances .`);
   }
   else if(inp < num && inp> 0){
    alert("Your number is lesser than the actual number please try agian .");

   }
   else if(inp > num && inp < 100){
    alert("Your number is greater than the actual number please try agian .");

   }else {
    alert("Enter a number between 1 to 100 ");
   }
}
