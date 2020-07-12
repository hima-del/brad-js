const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];
getRandomUsrer();
getRandomUsrer();
getRandomUsrer();
async function getRandomUsrer() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    //console.log(data);
    const user = data.results[0];
    //console.log(user);
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    };
    //console.log(newUser);
    addData(newUser);
}

function addData(obj) {
    data.push(obj)
}
console.log(data);