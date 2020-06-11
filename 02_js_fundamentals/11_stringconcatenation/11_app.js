const firstName = "John";
const lastName = "Thomas";
const age = 36;
const str = 'hello there,I am Brad'
const tags = 'web design,web development,programming'
let val;
val = firstName + lastName;
//concatenation
val = firstName + ' ' + lastName;
//append
val = 'brad ';
val += 'traversy';
val = 'hello , my name is  ' + firstName + 'and i am ' + age;
//escaping
val = 'that\'s awesome, I can\'t wait'
    //length
val = firstName.length;
//concat()
val = firstName.concat(' ', lastName);
//change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();
val = firstName[0];
//indexOf()
val = firstName.indexOf('o');
val = firstName.lastIndexOf('o');
//charAt()
val = firstName.charAt('1');
//get last char
val = firstName.charAt(firstName.length - 1);
//substring()
val = firstName.substring(1, 4);
//slice()
val = firstName.slice(0, 2);
val = firstName.slice(-2);
//split()
val = str.split(' ');
val = tags.split(',');
//replace()
val = str.replace('Brad', 'Jack');
//includes()
val = str.includes('hello');
console.log(val);