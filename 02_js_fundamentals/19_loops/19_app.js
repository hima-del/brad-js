//for loop
// for (let i = 0; i < 10; i++) {
//     // console.log(i);
//     if (i === 2) {
//         console.log('2 is my fav num');
//         continue; //go to the next iteration
//     }
//     if (i === 5) {
//         console.log('stop the loop');
//         break;
//     }
//     console.log('number ' + i);
// }
// //while loop
// let i = 0;
// while (i < 10) {
//     console.log('number ' + i);
//     i++;
// }
//do while
// let i = 100;
// do {
//     console.log('number ' + i);
//     i++;
// }
// while (i < 10)
const fruits = ['pear', 'mango', 'apple', 'grapes']
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//foreach loop
fruits.forEach(function(fruits) {
        console.log(fruits);
    })
    //map
const users = [
    { id: 1, name: 'john' },
    { id: 2, name: 'sara' },
    { id: 3, name: 'seetha' }
];
const ids = users.map(function(user) {
    return user.id;
})
console.log(ids);
//for in loop
const user = {
    firstName: 'john',
    lastName: 'doe',
    age: 30
}
for (let x in user) {
    console.log(`${x}:${user[x]}`);
}