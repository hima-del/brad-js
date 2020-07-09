let re;
re = /hello/;
re = /hello/i; //i=case insensitive
re = /hello/g; //global search
console.log(re);
console.log(re.source);
//exec()-return result in an array or null
const result1 = re.exec('hello');
const result2 = re.exec('good hello world');
const result3 = re.exec('hi john');
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result1[0]);
console.log(result2.index);
console.log(result2.input);
//test()
const output1 = re.test('Hello');
console.log(output1);
const output2 = re.test('hello');
console.log(output2);
//match()-return result array or null
const str = 'hello there';
const output3 = str.match(re);
console.log(output3);
//search()-returns index of first match and if not it returns -1
const str1 = 'himaja hello there';
const output5 = str1.search(re);
console.log(output5);
//replace()
const str2 = 'hello there';
const newStr = str2.replace(re, 'hi');
console.log(newStr);