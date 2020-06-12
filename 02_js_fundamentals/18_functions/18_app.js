// function declaration
function greet(firstName, lastName) {
    // console.log('hello');
    return 'hello' + ' ' + firstName + ' ' + lastName;
}
// console.log(greet('john', 'smith'));
//function expression
const square = function(x) {
    return x * x;
};
console.log(square(2));
//immediately invokable function expressions
(function() {
    console.log('IIFE Ran..');
})();
(function(name) {
    console.log('hello' + name);
})('brad');
//property methods
const todo = {
    add: function() {
        console.log('add todo..');

    },
    edit: function(id) {
        console.log(`edit todo ${id}`);
    }
}
todo.delete = function() {
    console.log('delete todo....');
}
todo.add();
todo.edit(22);
todo.delete();