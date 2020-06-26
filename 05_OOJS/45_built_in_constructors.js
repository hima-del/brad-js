//string
const name1 = 'mary';
const name2 = new String('mary');
console.log(name1);
console.log(name2);
console.log(typeof name1);
console.log(typeof name2);
name2.color = 'wheat';
if (name1 === 'mary') {
    console.log('yes');
} else {
    console.log('no');
}
if (name2 === 'mary') {
    console.log('yes');
} else {
    console.log('no');
}
//number
const num1 = 5;
const num2 = new Number(5);
console.log(num1);
console.log(num2);
console.log(typeof num1);
console.log(typeof num2);
//boolean
const bool1 = true;
const bool2 = new Boolean(true);
console.log(bool1);
console.log(bool2);
console.log(typeof bool1);
console.log(typeof bool2);
//function
const getSum1 = function(x, y) {
    return x + y;
}
const getSum2 = new Function('x', 'y', 'return 1+1');
console.log(getSum2(1, 1));
//object
const john1 = { name: "john" };
const john2 = new Object({ name: "john" });
console.log(john1);
console.log(john2);
//arrays
const array1 = [1, 2, 3, 4, 5];
const array2 = new Array(1, 2, 3, 4, 5);
console.log(array1);
console.log(array2);
//regular expression
const re1 = /\w+/;
const re2 = new RegExp('\w+');
console.log(re1);
console.log(re2);