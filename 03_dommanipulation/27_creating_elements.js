//create element
const li = document.createElement('li');
//add class
li.className = 'collection-item';
//add id
li.id = 'new-item';
//add attribute
li.setAttribute('title', 'new item');
//create text node and append
li.appendChild(document.createTextNode('hello world'));
//create new link element
const link = document.createElement('a');
//add class
link.className = 'delete-item secondary-content';
//add icon
link.innerHTML = '<i class="fa fa-remove"></i>';
//append li as child to ul
//append link to li
li.appendChild(link);
document.querySelector('ul.collection').appendChild(li);
console.log(li);