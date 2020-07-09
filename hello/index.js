function printHello(sayHello, value) {
    sayHello(value);
}

function hello(elmnt) {
    console.log(elmnt);
}
let value = "hello world";
printHello(hello, value);