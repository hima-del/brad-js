let incomeNumber = 0;
let removedNumber = 0;
let expenseNumber = 0;
const btn = document.querySelector('.btn');
btn.addEventListener('click', addTransaction);
const listUl = document.getElementById('list');
listUl.addEventListener('click', deleteData);
let history = document.getElementById('list').querySelectorAll('li');
updateDom();
updateBalance();

function addTransaction(e) {
    updateIncomeAndExpense();
    updateBalance();
    addHistory();
    document.getElementById('amount').value = '';
    document.getElementById('text').value = '';
    e.preventDefault();
}

function storeTaskInLocalStorage(text, amount, class_Name) {
    let historyArray = localStorage.getItem('history') !== null ? JSON.parse(localStorage.getItem('history')) : [];
    let obj = { text: text, amount: amount, className: class_Name };
    historyArray.push(obj);
    localStorage.setItem('history', JSON.stringify(historyArray));
    updateDom();
}

function updateDom() {
    listUl.innerHTML = '';
    let historyArray = localStorage.getItem('history') !== null ? JSON.parse(localStorage.getItem('history')) : [];
    historyArray.forEach(item => {
        const li = document.createElement('li');
        li.className = item.className;
        li.innerHTML = `${item.text}<span>${item.amount}</span><button class="delete-btn">X</button>`;
        listUl.appendChild(li);
    });
    document.getElementById('money-plus').innerText = localStorage.getItem('income') !== null ? localStorage.getItem('income') : 0;
    document.getElementById('money-minus').innerText = localStorage.getItem('expense') !== null ? localStorage.getItem('expense') : 0;
}

function updateIncomeAndExpense() {
    const income = document.getElementById('money-plus');
    const expense = document.getElementById('money-minus');
    const amount = document.getElementById('amount');
    let lsIncome = localStorage.getItem('income') !== null ? parseFloat(localStorage.getItem('income')) : 0;
    let lsExpense = localStorage.getItem('expense') !== null ? parseFloat(localStorage.getItem('expense')) : 0;
    let amountNumber = parseFloat(amount.value);
    console.log(lsIncome, lsExpense);
    console.log("amount", amountNumber);
    if (amountNumber > 0) {
        lsIncome = lsIncome + amountNumber;
        income.innerText = lsIncome;
        localStorage.setItem('income', JSON.stringify(lsIncome));
    } else {
        lsExpense = lsExpense + amountNumber;
        expense.innerText = lsExpense;
        localStorage.setItem('expense', JSON.stringify(lsExpense));
    }
}

function updateBalance() {
    let lsIncome = localStorage.getItem('income') !== null ? parseFloat(localStorage.getItem('income')) : 0;
    let lsExpense = localStorage.getItem('expense') !== null ? parseFloat(localStorage.getItem('expense')) : 0;
    let lsBalance = localStorage.getItem('balance') !== null ? parseFloat(localStorage.getItem('balance')) : 0;
    const balance = document.getElementById('balance');
    lsBalance = lsExpense + lsIncome;
    balance.innerText = lsBalance;
    localStorage.setItem('balance', JSON.stringify(lsBalance));
}

function addHistory() {
    if (amount.value === '') {
        alert('add an amount');
    }
    let amountNumber = parseFloat(amount.value);
    const list = document.querySelector('.list');
    const text = document.getElementById('text');
    if (amountNumber > 0) {
        let className1 = 'plus';
        storeTaskInLocalStorage(text.value, amount.value, className1);
    } else {
        let className2 = 'minus';
        storeTaskInLocalStorage(text.value, amount.value, className2);
    }

}

function deleteData(e) {
    const income = document.getElementById('money-plus');
    const expense = document.getElementById('money-minus');
    const amount = document.getElementById('amount');
    let amountNumber = parseFloat(amount.value);
    const balance = document.getElementById('balance');
    let lsIncome = localStorage.getItem('income') !== null ? parseFloat(localStorage.getItem('income')) : 0;
    let lsExpense = localStorage.getItem('expense') !== null ? parseFloat(localStorage.getItem('expense')) : 0;
    let lsBalance = localStorage.getItem('balance') !== null ? parseFloat(localStorage.getItem('balance')) : 0;
    if (e.target.parentElement.classList === 'delete-btn'); {
        if (confirm('are you sure')) {
            let removedNumber = e.target.previousSibling.textContent;
            if (removedNumber > 0) {
                lsIncome = lsIncome - removedNumber;
                income.innerText = lsIncome;
                localStorage.setItem('income', JSON.stringify(lsIncome));
            } else {
                lsExpense = lsExpense - removedNumber;
                expense.innerText = lsExpense;
                localStorage.setItem('expense', JSON.stringify(lsExpense));
            }
            lsBalance = lsIncome + lsExpense;
            balance.innerText = lsBalance;
            localStorage.setItem('balance', JSON.stringify(lsBalance));
            e.target.parentElement.remove();
        }
    }
}