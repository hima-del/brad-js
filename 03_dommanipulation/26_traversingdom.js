let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');
//get child nodes
val = list.childNodes;
//get children element nodes
val = list.children;
val = list.children[1];
val = list.children[1].textContent = 'hello';
//children of children
val = list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];
//first child
val = list.firstChild;
val = list.firstElementChild;
//last child
val = list.lastChild;
val = list.lastElementChild;
//count child elements
val = list.childElementCount;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[7].nodeType;
//1-element
//2-attribute
//3-text node
//8-comment
//9-document itself
//10-doctype
//get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;
//get next siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;
//get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);