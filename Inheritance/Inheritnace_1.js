class Moment extends Date {
    constructor() {
        super();
    }
}
var m = new Moment();

console.log(m.getDate() + "-" + (m.getMonth() + 1) + "-" + m.getFullYear())
console.log(Date.now())
