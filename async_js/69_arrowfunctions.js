// const sayHello = function() {
//     console.log('hello');
// }
// const sayHello = () => {
//         console.log('hello');
//     }
//     //one line function does not need braces
// const sayHello = () => console.log('hello');
// //one line returns
// const sayHello = () => 'hello';
// //same as above
// const sayHello = function() {
//         return 'hello';
//     }
//     //sayHello();
//     //return object
// const sayHello = () => ({ msg: 'hello' });
//single param does not need paranthesis
//const sayHello = name => console.log(`hello${name}`);
// console.log(sayHello());
// sayHello('himaja');
// //multiple params need paranthesis
// const sayHello = (firstName, lastName) => console.log(`hello${name}${lastName}`);
// sayHello('himaja', 'haridas');
const users = ['nathan', 'john', 'william'];
const nameLengths = users.map(function(name) {
    return name.length;
});
//shorter
const nameLengths = users.map((name) => {
    return name.length;
});
//shortest
const nameLengths = users.map(name => name.length);
console.log(nameLengths);