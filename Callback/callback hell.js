 // Callback hell : 
// Nested callbacks stacked below one another forming a pyramid structure. 
// This style of programming becomes difficult to understand and amange



function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log('data', dataId);
        if(getNextData){
            getNextData()
        }
    },2000)
}


// this is called callback hell
getData(1, ()=>{
    getData(2, ()=>{
        getData(3);
    })
})







