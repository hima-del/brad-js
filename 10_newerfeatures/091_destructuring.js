//destructuring
let a, b;
[a, b] = [100, 200];
//rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];
//console.log(rest);
({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
console.log(a, b);
console.log(rest);
//array destructuring
const people = ['john', 'mary', 'william', 'beth'];
const [person1, person2, person3] = people;
console.log(person1, person2, person3);
//parse array returned from function
function getPeople() {
    return ['raman', 'seetha', 'ravan'];
}
let person4, person5, person6;
[person4, person5, person6] = getPeople();
console.log(person4, person5, person6);
//object destructuring
const person = {
        name: 'john doe',
        age: 32,
        city: 'miami',
        gender: 'male',
        sayHello: function() {
            console.log('hello');
        }
    }
    //old es5
    // const name = person.name;
    // age = person.age;
    // city = person.city;
    //new es6 destructuring
const { name, age, city, sayHello } = person;
sayHello();
console.log(name, age, city);