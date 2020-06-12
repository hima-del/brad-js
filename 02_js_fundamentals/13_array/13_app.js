const numbers = [1, 2, 4, 16, 7, 8, 43, 55, 65, 78];
const numbers2 = new Array(20, 33, 45, 6, 88, );
const fruit = ['apple', 'banana', 'mango', 'pear'];
const mix = [22, 'hello', true, undefined, null, new Date()];
let val;
//get array length
val = numbers.length;
//check if it is array
val = Array.isArray(numbers);
//get single value
val = numbers[4];
//insert into array
numbers[2] = 100;
//find index
val = numbers.indexOf(65);
//mutating arrays
//add to end
numbers.push(230);
//add to front
numbers.unshift(11);
//take off from end
numbers.pop();
//take off from front
numbers.shift(11);
//splice 
numbers.splice(2, 2);
//reverse
numbers.reverse();
//concatenate
val = numbers.concat(numbers2);
//sort
val = fruit.sort();
val = numbers.sort();
//use compare function
val = numbers.sort(function(x, y) {
    return x - y;
});
//reverse sort
val = numbers.sort(function(x, y) {
    return y - x;
});

function under50(num) {
    return num < 50;
}

function over50(num) {
    return num > 50;
}
val = numbers.find(over50);
console.log(numbers);
console.log(val);