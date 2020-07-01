//craete symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');
console.log(sym1);
console.log(sym2);
console.log(typeof sym1);
console.log(typeof sym2);
console.log(Symbol('123') === Symbol('123'));
console.log(`hello ${String(sym1)}`);
//unique onject keys
const key1 = Symbol();
const key2 = Symbol('sym2');
const myObj = {};
myObj[key1] = 'prop1';
myObj[key2] = 'prop2';
myObj.key3 = 'prop3';
myObj.key4 = 'prop4';
console.log(myObj[key1]);
console.log(myObj[key2]);
//symbols are not enumerable in for..in loop
for (let i in myObj) {
    console.log(`${i}:${myObj[i]}`);
}
//symbols are ignored by JSON.stringify
console.log(JSON.stringify({ key: 'prop' }));
console.log(JSON.stringify({
    [Symbol('sym1')]: 'prop' }));