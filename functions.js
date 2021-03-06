
//functions are first class objects
function fun(a,b){
     console.log(`a:${a},b:${b}`)
}

fun(10,20,30,40,50,60,70)

//anonymous functions

var fun=function(a,b){
     console.log(`${a*b}`)
}

fun(2,5)