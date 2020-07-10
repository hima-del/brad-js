let incomeNumber = 0;
let expenseNumber = 0;
const btn = document.querySelector('.btn');
btn.addEventListener('click', addTransaction);
const listUl = document.getElementById('list');
listUl.addEventListener('click', deleteData);

function addTransaction(e) {
    const form = document.getElementById('form');
    const history = document.getElementById('list');
    updateIncomeAndExpense();
    updateBalance();
    addHistory();
    // deleteData();
    e.preventDefault();
}

function updateIncomeAndExpense() {
    const income = document.getElementById('money-plus');
    const expense = document.getElementById('money-minus');
    const amount = document.getElementById('amount');
    let amountNumber = parseFloat(amount.value);
    if (amountNumber > 0) {
        incomeNumber = incomeNumber + amountNumber;
        income.innerText = incomeNumber;
    } else {
        expenseNumber = expenseNumber + amountNumber;
        expense.innerText = expenseNumber;
    }
}

function updateBalance() {
    const balance = document.getElementById('balance');
    let balanceNumber = expenseNumber + incomeNumber;
    balance.innerText = balanceNumber
}

function addHistory() {
    if (amount.value === '') {
        alert('add an amount');
    }
    let amountNumber = parseFloat(amount.value);
    const list = document.querySelector('.list');
    const text = document.getElementById('text');
    if (amountNumber > 0) {
        //create li
        const li1 = document.createElement('li');
        //add class
        li1.className = 'plus';
        const span1 = document.createElement('span');
        span1.className = 'plus';
        //cretae text node and append to li
        li1.appendChild(document.createTextNode(text.value));
        span1.appendChild(document.createTextNode(amount.value));
        list.appendChild(li1);
        li1.appendChild(span1);
        const link1 = document.createElement('a');
        //add class
        link1.className = 'delete-btn';
        //add icon html
        link1.innerHTML = '<i class="fa fa-remove"></i>';
        //append link to li
        li1.appendChild(link1);
    } else {
        //create li
        const li2 = document.createElement('li');
        //add class
        li2.className = 'minus';
        const span2 = document.createElement('span');
        span2.className = 'plus';
        //cretae text node and append to li
        li2.appendChild(document.createTextNode(amount.value));
        span2.appendChild(document.createTextNode(amount.value));
        list.appendChild(li2);
        li2.appendChild(span2);
        const link2 = document.createElement('a');
        //add class
        link2.className = 'delete-btn';
        //add icon html
        link2.innerHTML = '<i class="fa fa-remove"></i>';
        //append link to li
        li2.appendChild(link2);
    }

}

function deleteData(e) {
    if (e.target.parentElement.classList === 'delete-btn'); {
        //console.log(e.target.parentElement.parentElement);
        if (confirm('are you sure')) {
            e.target.parentElement.parentElement.remove();
        }
    }


}