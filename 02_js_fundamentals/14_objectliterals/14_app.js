const person = {
    firstName: 'Steve',
    lastName: 'Lopass',
    age: 28,
    email: 'steve@gmail.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'auckland',
        state: 'FL'
    },
    getBirthYear: function() {
        return 2020 - this.age;
    }
}
let val;
val = person;
//get specific value
val = person.firstName;
val = person.lastName;
val = person.age;
val = person.email;
val = person.hobbies[1];
val = person.address.city;
val = person.getBirthYear();
console.log(val);
const people = [
    { name: 'john', age: '20' },
    { name: 'albert', age: 30 }
];
for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}