function sum(a,b){
    console.log(a+b)
}



function calculator(a,b,sumCallback){
    sumCallback(a,b)
}



calculator(34,10,sum)   //44