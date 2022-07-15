class CompanyName {
    constructor() {
        this.company = "Javatpoint";
        console.log("CompanyName Constructor")
    }
}

class Employee extends CompanyName {
    constructor(id, name) {
        super();
        this.id = id;
        this.name = name;
        console.log("Employee Constructor")
    }
}

var emp = new Employee(1,1,1);
console.log(emp.company)