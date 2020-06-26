//PERSON CONSTRUCTOR
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
//greeting
Person.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
}
const person1 = new Person('John', 'Doe');
//console.log(person1.greeting());
//customer constructor
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}
//inherit person prototype methods
Customer.prototype = Object.create(Person.prototype);

//create customer
const customer1 = new Customer('Tom', 'Smith', '555-55-55', 'standard');
//customer greeting
Customer.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

console.log(customer1);
console.log(customer1.greeting());