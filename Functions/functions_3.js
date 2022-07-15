class Test {
    static display1() {
        return "static method is invoked"
    }
    static display2() {
        return "static method is invoked again"
    }
}  

console.log(Test.display1())
console.log(Test.display2())