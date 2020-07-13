const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];
getRandomUser();
getRandomUser();
getRandomUser();
async function getRandomUser() {
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

function doubleMoney() {
    data = data.map((user => {
        return {...user, money: user.money * 2 };
    }));

    updateDOM();
}

function sortByRIchest() {
    data.sort((a, b) => b.money - a.money);
    updateDOM();
}

function showMillionaires() {
    data = data.filter(user => user.money > 1000000);
    updateDOM();
}

function calculateWealth() {
    const wealth = data.reduce((acc, user) => (acc += user.money), 0);
    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <stron>${formatMoney(wealth)}</strong></h3>`;
    main.appendChild(wealthEl);
}

function addData(obj) {
    data.push(obj)
    updateDOM();
}
//console.log(data);
function updateDOM(providedData = data) {
    main.innerHTML = ' <h2><strong>Person</strong>Wealth</h2>';
    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        //console.log(data);
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
        main.appendChild(element);
    });
}
//format number as money
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRIchest)
showMillionairesBtn.addEventListener('click', showMillionaires)
calculateWealthBtn.addEventListener('click', calculateWealth);