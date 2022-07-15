class Student {
    constructor() {
        var name;
        var marks;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    getMarks() {
        return this.marks;
    }
    setMarks(marks) {
        this.marks = marks;
    }

}


var stud1 = new Student();

stud1.setName("Akash");
stud1.setMarks(80);

var stud2 = new Student();

stud2.setName("Santhosh");
stud2.setMarks(93);  

console.log(stud1.getMarks())
console.log(stud2.getMarks())