//person constructor
function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
// const john = new person('john', 34);
// const mary = new person('mary', 38);
// console.log(mary.age);
const mary = new Person('mary', '9-10-1981');
console.log(mary.calculateAge());
//console.log(mary);