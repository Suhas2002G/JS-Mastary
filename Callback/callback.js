// Callback : It is a function that is passed as argumment to another function



//way 1 : create separate function then pass it as callback
function sum(a,b){
    console.log(a+b)
}

function calculator(a,b,sumCallback){
    sumCallback(a,b)
}

calculator(34,10,sum)   //44



//way 2 : directly write function while calling function

function subtract(a,b,subCallback){
    subCallback(a,b)
}

subtract(30,20,(a,b)=>{
    console.log(a-b)
})