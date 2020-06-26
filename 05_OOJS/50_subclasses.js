class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}
class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName); //calls parent class constructor
        this.phone = phone;
        this.membership = membership;
    }
    static membershipCost() {
        return 500;
    }
}
const john = new Customer('John', 'Doe', '5555', 'standard');
console.log(john);
console.log(john.greeting());
console.log(Customer.membershipCost());