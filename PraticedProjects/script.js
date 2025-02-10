var bulb = document.querySelector("#bulb") ;
var btn1 = document.querySelector("#btn1") ;
var btn2 = document.querySelector("#btn2");

var flag = 0;

btn1.addEventListener("click" , function(){

    if(flag == 0){
        bulb.style.backgroundColor = "yellow" ;
        flag = 1 ;
    }
    else{
        bulb.style.backgroundColor = "transparent" ;
        flag = 0 ;
    }

}) ;
