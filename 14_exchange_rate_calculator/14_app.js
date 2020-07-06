const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-one');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');




function calculate() {
    // fetch('items.json')
    // .then(res => res.json())
    // .then(data=>(document.body.innerHTML=data[0].text));
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_two];
            rateEl.innerText = `1 ${currency_one}= ${rate} ${currencyEl_two}`
            amountEl_two = (amountEl_one * rate).toFixed(2);
        });
}

// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('change', calculate);
swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
})
calculate();