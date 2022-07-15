var emp;

class Employee {

    constructor(x) {
        this.id = x;
        this.name = "Martin Roy";
        console.log("This is Constructor " + x)
    }

}
var emp1 = new Employee(101);
var emp2 = new Employee(200);
var emp2 = new Employee(200);

console.log(emp1.id)
console.log(emp2.id)