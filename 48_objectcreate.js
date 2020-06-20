const personPrototypes = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName) {
        this.lastName = newLastName;
    }
}
const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'John';
mary.age = 30;
console.log(mary);
console.log(mary.getsMarried('Williams'));
console.log(mary.greeting());
const anna = Object.create(personPrototypes, {
    firstName: { value: 'Anna' },
    lastName: { value: 'Xaviour' },
    age: { value: 35 }
});
console.log(anna);
console.log(anna.greeting());