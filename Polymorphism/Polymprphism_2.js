class A {
    display() {
        console.log("A is invoked");
    }

    static display1() {
        console.log("AAAAAA is invoked");
    }
}
class B extends A {
    display() {
        console.log("B is invoked");
    }
    display2() {
        console.log("BBBBBB is invoked");
    }
}

var a = [new A(), new B()]
a.forEach(function (aaa) {
    aaa.display();
});

