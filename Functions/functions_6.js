class Test {
    static display() {
        return "static method is invoked"
    }

    show() {
        console.log(Test.display());
    }
}

var t = new Test();
t.show();
Test.display();  