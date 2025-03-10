// Promises : 
// promises is for 'eventual' completion of task.
// It is a solution of callback hell

// let promise = new Promise((resolve, reject)=>{.....})
//                              |__________|        
//                                    |       
//                             Function with 2 handlers

// * resolve and reject are callback provided by JS



// promise has three states : 
        // 1. pending
        // 2. fullfilled  [resolve]= result 
        // 3. rejected     [reject]= error




let promise = new Promise((resolve, reject)=>{
    console.log('I am a promise')
})




// Promise Chain

function asyncFunc () {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Some data1')
        },4000);
    });
}