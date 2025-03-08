const student = {
    name : 'Suhas',
    marks : 90,
    showMarks : function(){
        console.log(`Name = ${this.name} and Marks = ${this.marks}`)
    }
}

console.log(student)   // { name: 'Suhas', marks: 90, showMarks: [Function: showMarks] }

console.log(student.name)   //suhas

console.log(student.marks)  //90

console.log(student.showMarks())  //Name = Suhas and Marks = 90




const employee = {
    calcTax(){
        console.log('tax is 20%')
    }
}

console.log(employee.calcTax)