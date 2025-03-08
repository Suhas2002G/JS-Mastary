const emp = {
    calcTax(){
        console.log('Tax rate is 20%')
    }
}


const suhas = {
    salary : 50000,
}


suhas.__proto__ = emp
