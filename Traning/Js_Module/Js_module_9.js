var Employee = {
    comapany: "XYZ"
}

var Emp1 = Object.create(Employee)
delete Emp1.comapany
console.log(emp1.comapany)

// ERROR as this is object and after delete we can't use so
// Err: emp1 is not defined