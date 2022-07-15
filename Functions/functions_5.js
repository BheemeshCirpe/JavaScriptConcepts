class Test {
    constructor() {

        var a = Test.display();
        console.log(a);
        console.log(this.constructor.display());
    }

    static display() {
        return "static method is invoked"
    }
}
var t = new Test();