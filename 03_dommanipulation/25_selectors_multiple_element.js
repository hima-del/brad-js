//getElementByClassName
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'hello';
const listItems = document.querySelector('ul').getElementsByClassName('collection-item')
console.log(listItems);
//getElementByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'hello';
//convert html collection into array
lis = Array.from(lis);
lis.reverse();
lis.forEach(function(li, index) {
    console.log(li.className);
    li.textContent = `${index}:hello`;
});
console.log(lis);
//document.queryselectorall
const itemss = document.querySelectorAll('ul.collection li.collection-item');
itemss.forEach(function(item, index) {
    item.textContent = `${index}:hello`;
});
console.log(itemss);
const liodd = document.querySelectorAll('li:nth-child(odd)');
const lieven = document.querySelectorAll('li:nth-child(even)');
liodd.forEach(function(li, index) {
    li.style.background = '#ccc';
});
for (let i = 0; i < lieven.length; i++) {
    lieven[i].style.background = '#f4f4f4';
}