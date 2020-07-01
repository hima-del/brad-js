//iterator example
function nameIterator(names) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex < names.length ? { value: names[nextIndex++], done: false } : { done: true }
        }
    }
}
//create an array of names
const arrNames = ['seetha', 'raman', 'ravan'];
const names = nameIterator(arrNames);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next());

//generator example
function* sayNames() {
    yield 'seetha';
    yield 'raman';
    yield 'ravan';
}
const name = sayNames();
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
//id creator
function* createIds() {
    let index = 0;
    while (true) {
        yield index++;
    }
}
const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);