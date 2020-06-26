//global scope
var a = 1;
let b = 2;
const c = 3;

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('function scope: ', a, b, c);
}
test();
//block scope
if (true) {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('if scope ', a, b, c);
}
for (let a = 0; a < 10; a++) {
    console.log(`loop:${a} `)
}
console.log('global scope: ', a, b, c);