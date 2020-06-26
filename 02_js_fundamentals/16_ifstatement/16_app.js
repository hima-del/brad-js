 const id = 100;
 //equal to
 if (id == 100) {
     console.log('correct');
 } else {
     console.log('incorrect');
 }
 //not equal to
 if (id != 100) {
     console.log('correct');
 } else {
     console.log('incorrect');
 }
 //// equal to value and type
 if (id !== 100) {
     console.log('correct');
 } else {
     console.log('incorrect');
 }
 if (typeof id !== 'undefined') {
     console.log(`the id is ${id}`);
 } else {
     console.log('no id');
 }
 //greater or less than
 if (id > 100) {
     console.log('correct');
 } else {
     console.log('incorrect');
 }
 // if else
 const color = 'yellow';
 if (color === 'red') {
     console.log('color is red');
 } else if (color === 'blue') {
     console.log('color is blue');
 } else {
     console.log('not red or blue');
 }
 //logical operators
 const name = 'steve';
 const age = 20;
 //AND
 if (age > 0 && age < 12) {
     console.log(`${name} is a child`);
 } else if (age >= 13 && age <= 19) {
     console.log(`${name} is a teenager`);
 } else {
     console.log(`${name} is a adult`);
 }
 //OR
 if (age < 16 || age > 65) {
     console.log(`${name} can not run in a race`);
 } else {
     console.log(`${name} is registered for the race`);
 }
 //ternary poerator
 console.log(id === 100 ? 'correct' : 'incorrect');