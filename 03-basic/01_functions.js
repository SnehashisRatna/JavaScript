function  loginUserMessage(user) {
    if(!user){
        console.log("Pls Enter a Valid Username") ; 
        return ; 
    }
    return `${user} just logged in` ; 
}

console.log(loginUserMessage("Sneha")) ; 