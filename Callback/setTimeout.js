
//way 1 : define function separate and then call it in setTimeout
const greet = ()=>{
    console.log('hello good morning')
}
setTimeout(greet,2000)


// way 2 : write function inside setTimeout

setTimeout(()=>{
    console.log('After 3s')
},3000)










// setInterval(()=>{
//     console.log('after each 2 s')
// },2000)



