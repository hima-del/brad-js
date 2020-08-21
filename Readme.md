**How to Toggle an Element Class in JavaScript ?**

**METHOD 1**

* Toggling the class means if there is no class name assigned to the element, then a class name can be assigned to it dynamically =>
  or if a certain class is already present, then it can be removed dynamically by just using the toggle() =>
  or by using contains(), add(), remove() methods of DOMTokenList object within JavaScript.
  
  ```
  <!DOCTYPE html> 
  <html lang="en"> 
  <head> 
    <meta charset="UTF-8"> 
    <title>Geeks for Geeks</title> 
    <style> 
        .paragraphClass { 
            font-size: 30px; 
            color: red; 
        } 
          #Button { 
            margin-top: 15px; 
        } 
    </style> 
    <script> 
        function myFunc() { 
            var para = document.getElementById("p"); 
            para.classList.toggle("paragraphClass"); 
        } 
    </script> 
  </head> 
  <body> 
    <p id="p"> 
        Click on the button to toggle 
        between the class to see the 
        effects  
    </p> 
  
    <button id="Button" onclick="myFunc()"> 
        Click Me 
    </button> 
  </body> 
  </html> 
  
  

**METHOD 2**

* In this method, we will use the contains(), add(), remove() method for toggling the class names. 
* The trick here is that we will check whether a particular class is present or not using contains() method, and then we will add or remove the class names from the element       using add() or remove() respectively.

```
<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <title>Geeks for Geeks</title> 
    <style> 
        .paragraphClass { 
            font-size: 30px; 
            color: red; 
        } 
  
        #Button { 
            margin-top: 15px; 
        } 
    </style> 
  
    <script> 
        function myFunc() { 
            var para = document.getElementById("p"); 
  
            if(para.classList.contains("paragraphClass")) { 
                para.classList.remove("paragraphClass"); 
            } 
            else { 
                para.classList.add("paragraphClass"); 
            } 
        } 
    </script> 
</head> 
  
<body> 
    <p id="p"> 
        Click on the button to toggle 
        between the class to see the 
        effects 
    </p> 
  
    <button id="Button" onclick="myFunc()"> 
        Click Me 
    </button> 
</body> 
  
</html> 
```
**Try and Catch**

* The try statement : test a block of code for errors.
* The catch statement : handle the error.
* The throw statement : create custom errors.
* The finally statement : execute code, after try and catch, regardless of the result.

**Instance of operator**

* The instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.

**Regular Expressions**

* exec() : The exec() method executes a search for a match in a specified string. Returns a result array, or null.
```
const result1 = re.exec('hello');
const result2 = re.exec('good hello world');
const result3 = re.exec('hi john');
console.log(result1);
console.log(result2);
console.log(result3);
```
* The output for above code is "hello", index: 0, input: "hello","hello", index: 5, input: "good hello world", null
*  match() : Retrieves the result of matching a string against a regular expression.



**Types of nodes**

* Element node: An element, as it exists in the DOM.
* Root node: The top node in the tree, which in the case of HTML is always the HTML node.
* Child node: A node directly inside another node. For example,
```
<html>
  <head>
    <meta charset="utf-8">
    <title>Simple DOM example</title>
  </head>
  <body>
      <section>
        <img src="dinosaur.png" alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth.">
        <p>Here we will add a link to the <a href="https://www.mozilla.org/">Mozilla homepage</a></p>
      </section>
  </body>
</html>
```

* IMG is a child of SECTION in the above example.
* Descendant node: A node anywhere inside another node. For example, IMG is a child of SECTION in the above example, and it is also a descendant. IMG is not a child of BODY, as it   is two levels below it in the tree, but it is a descendant of BODY.
* Parent node: A node which has another node inside it. For example, BODY is the parent node of SECTION in the above example.
* Sibling nodes: Nodes that sit on the same level in the DOM tree. For example, IMG and P are siblings in the above example.
* Text node: A node containing a text string.

**Iterator**

* An iterator is any object which implements the Iterator protocol by having a next() method that returns an object with two properties
* The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite), and potentially a return value when all values have been generated.
* An object is an iterator when it implements a next() method 
* next() : A zero-argument function that returns an object with at least the following two properties:
  * done (boolean) : Has the value false if the iterator was able to produce the next value in the sequence. (This is equivalent to not specifying the done property altogether.)
    Has the value true if the iterator has completed its sequence. In this case, value optionally specifies the return value of the iterator.
  * value : Any JavaScript value returned by the iterator. Can be omitted when done is true.
* The next() method must always return an object with appropriate properties including done and value. 
* If a non-object value gets returned (such as false or undefined), a TypeError ("iterator.next() returned a non-object value") will be thrown.
* Once created, an iterator object can be iterated explicitly by repeatedly calling next().

**Symbols**

* Symbols are new primitive type introduced in ES6.
* Symbols are completely unique identifiers. 
* Just like their primitive counterparts (Number, String, Boolean), they can be created using the factory function Symbol() which returns a Symbol.
```
const symbol = Symbol('description')
```
* Every time we call the factory function, a new and unique symbol is created
```
Symbol() === Symbol()
```
   This will return false
  
  
  **Set in ES6**
   
   * set() Creates a new Set object.
   * The Set obSet objects are collections of values. 
   * We can iterate through the elements of a set in insertion order. 
   * A value in the Set may only occur once; it is unique in the Set's collection. 
   
   **ES6 Promise**
  
  * Promises in javascript are very similar to promises made in real life
   * Playing with promises has 2 parts-
      * Creation of Promises
      * Handling of Promises
      
      **Creation**
      
      * The executing function(executor) accepts two parameters resolve and reject which in turn are callback functions.
      * Promises are used for handling asynchronous operations also called blocking code, examples of which are DB, I/O or API calls, which are carried out by the executor               function. 
      * Once that completes it either calls resolve on success or reject function on error.
      * As it can be seen, Promises don’t return values immediately.
      * It waits for the success or failure and then returns accordingly. 
      * This lets asynchronous methods return values like synchronous ones. 
      * Instead of returning values right away, async methods supply a promise to return the value.
      
      ```
      let promise = new Promise(function(resolve, reject) {
      if(promise_kept)
      resolve("done");
      else
      reject(new Error("…"));
       });
       ```
     
   * A Promise is a proxy for a value not necessarily known when the promise is created
   * A Promise is in one of these states:
       * pending: initial state, neither fulfilled nor rejected.
       * fulfilled: meaning that the operation completed successfully.
       * rejected: meaning that the operation failed.
   * A pending promise can either be fulfilled with a value, or rejected with a reason (error)
   
   **then() method**
  
  * The then() method returns a Promise. 
   * It takes up to two arguments: callback functions for the success and failure cases of the Promise.
   ```
   let p1 = new Promise((resolve, reject) => {
  resolve('Success!');
  // or
  // reject(new Error("Error!"));
});

p1.then(value => {
  console.log(value); // Success!
}, reason => {
  console.error(reason); // Error!
});
```


**Async Await**

* Async and Await are extensions of promises

**async**

* Async functions enable us to write promise based code as if it were synchronous, but without blocking the execution thread.
* It operates asynchronously via the event-loop. 
* Async functions will always return a value.
* Using async simply implies that a promise will be returned, and if a promise is not returned, JavaScript automatically wraps it in a resolved promise with its value.

**Await**

* The await operator is used to wait for a Promise. 
* It can be used inside an Async block only. 
* The keyword Await makes JavaScript wait until the promise returns a result. 
* It has to be noted that it only makes the async function block wait and not the whole program execution.
```
async function firstAsync() {
    let promise = new Promise((res, rej) => {
        setTimeout(() => res("Now it's done!"), 1000)
    });

    // wait until the promise returns us a value
    let result = await promise; 
  
    // "Now it's done!"
    alert(result); 
    }
};
firstAsync();
```
**Difference between innerText and textContent**
* Although the names seem similar, there are important differences:
* textContent gets the content of all elements, including <script> and <style> elements.  
* In contrast, innerText only shows “human-readable” elements.
* textContent returns every element in the node. In contrast, innerText is aware of styling and won’t return the text of “hidden” elements.
  
**map()**
  
  * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
  
  ```
  const array1 = [1, 4, 9, 16];
  //pass a function to map 
  const map1 = array1.map(x => x * 2);
  console.log(map1);
  // expected output: Array [2, 8, 18, 32]
  ```
  
**forEach()**
  
  * The forEach() method executes a provided function once for each array element.

```
   const array1 = ['a', 'b', 'c'];
   array1.forEach(element => console.log(element));
   // expected output: "a"
  // expected output: "b"
 // expected output: "c"
```


**Difference between map() and forEach**

* The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
* The forEach() method executes a provided function once for each array element.
* forEach() does not mutate the array on which it is called

**sort()**

* The sort() method sorts the elements of an array in place and returns the sorted array. 
* The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
```
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```

**filter()**

* The filter() method creates a new array with all elements that pass the test implemented by the provided function.
```
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

**reduce()**

* The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
```
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

```

**Rest and Spread operators**

* Rest Parameter is collecting all remaining elements into an array .
```
let myName = ["Marina" , "Magdy" , "Shafiq"] ;
const [firstName , ...familyName] = myName ;
console.log(firstName); // Marina ;
console.log(familyName); // [ "Magdy" , "Shafiq"] ;
```

* Spread Operator is unpacking collected elements such as arrays into single elements .
```
let myName = ["Marina" , "Magdy" , "Shafiq"];
var newArr = [...myName ,"FrontEnd" , 24];
console.log(newArr) ; // ["Marina" , "Magdy" , "Shafiq" , "FrontEnd" , 24 ] ;
```

**Local Sorage**

* Local storage: Data that persists even if you refresh the page or close the browser.
* Session storage: Data that will get cleared when the browser is closed.
```
Method	Description
setItem()	- Add key/value in LocalStorage
getItem()	- Get a value from LocalStorage
removeItem() -	Remove item by its key
clear() -	Remove all items from LocalStorage
key()	- Get a key of an item from LocalStorage

```
* setItem() : Use the setItem() function to store an item in LocalStorage. This function takes a key as its first argument and a value as the second argument. As mentioned         earlier, both must be strings.
* getItem() : Use the getItem() function to retrieve data from LocalStorage. This function takes the key that was used while saving the data as an argument.
* removeItem() : Use the removeItem() function to remove one item from LocalStorage. You need to provide the key of the item you want to delete as an argument.
* clear() : To remove all the data stored in LocalStorage, use the clear() function
* key() : The key() function allows us to retrieve the key of an item saved in LocalStorage by its index. The browser creates an integer index for each item added to               LocalStorage.
* We can get around this by using JSON.stringify() to convert a data array to a string. 
* We'll use JSON.parse() to convert the contents of localStorage back into something we can work with later in the data variable.

**slice()**

* We can you remove the last character from a string by using the slice() method of the string, passing 2 parameters.
* THe first is 0, the starting point. The second is the number of items to remove.
* Passing a negative number will remove starting from the end

```
const text = 'abcdef'
const editedText = text.slice(0, -1) //'abcde'
```
* Note that the slice() method does not modify the original string.
* It creates a new string, this is why I assign it to a new variable in the above example.
```
https://srv.carbonads.net/ads/click/x/GTND42Q7CW7IVKQJCTSLYKQMF6BDLKJUF6AD4Z3JCWAIV5QIF67IL23KF6ADL5QICAYDK23ECWYI5537CTAIL23KC6BIL2QIC6YI6K3EHJNCLSIZ?segment=placement:flaviocopescom;

```
**substring()**

* The substring() method returns the part of the string between the start and end indexes, or to the end of the string.

```
const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"
```
```
let anyString = 'Mozilla'

// Displays 'M'
console.log(anyString.substring(0, 1))
console.log(anyString.substring(1, 0))

// Displays 'Mozill'
console.log(anyString.substring(0, 6))

// Displays 'lla'
console.log(anyString.substring(4))
console.log(anyString.substring(4, 7))
console.log(anyString.substring(7, 4))

// Displays 'Mozilla'
console.log(anyString.substring(0, 7))
console.log(anyString.substring(0, 10))
```
**The difference between substring() and substr()**

* The arguments of substring() represent the starting and ending indexes
* The arguments of substr() represent the starting index and the number of characters to include in the returned string.

```
let text = 'Mozilla'
console.log(text.substring(2,5))  // => "zil"
console.log(text.substr(2,3))     // => "zil"
```
 **setInterval()**
 
 * The setInterval() method that repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. 
 * It returns an interval ID which uniquely identifies the interval, so we can remove it later by calling clearInterval().
 
 ```
 let intervalID = window.setInterval(myCallback, 500, 'Parameter 1', 'Parameter 2');

function myCallback(a, b)
{

 console.log(a);
 console.log(b);
}
```
**setTimeout()**

* The setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

**switch statement**

* The switch statement is used to perform different actions based on different conditions.
* The switch has one or more case blocks and an optional default.

```
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```
* The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.
* If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).
* If no case is matched then the default code is executed (if it exists).

```
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}
```
* Here the switch starts to compare a from the first case variant that is 3 => The match fails => Then 4 => That’s a match, so the execution starts from case 4 until the nearest   break.
* If there is no break then the execution continues with the next case without any checks.

**JSON**

* JSON is a text-based data format following JavaScript object syntax, which was popularized by Douglas Crockford. 
* Even though it closely resembles JavaScript object literal syntax, it can be used independently from JavaScript
* Many programming environments feature the ability to read (parse) and generate JSON.
* JSON exists as a string => useful when you want to transmit data across a network. 
* It needs to be converted to a native JavaScript object when you want to access the data. 
* JavaScript provides a global JSON object that has methods available for converting between the two.
* JSON is a string whose format very much resembles JavaScript object literal format. 
* We can include the same basic data types inside JSON as you can in a standard JavaScript object => strings, numbers, arrays, booleans, and other object literals

```
{
  "first_name"  :  "Sammy",
  "last_name"   :  "Shark",
  "online"      :  true
}
```
* JSON is purely a data format — it contains only properties, no methods.
* JSON requires double quotes to be used around strings and property names => Single quotes are not valid.
* Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work.
* You can validate JSON using an application like JSONLint.
* JSON can actually take the form of any data type that is valid for inclusion inside JSON, not just arrays or objects => a single string or number would be a valid JSON object.
* Unlike in JavaScript code in which object properties may be unquoted, in JSON only quoted strings may be used as properties.


**JSON.stringify and JSON.parse**

* JSON.stringify() takes a JavaScript object and then transforms it into a JSON string.
* Strings are useful for transporting data from a client to a server through storing or passing information in a lightweight way.

```
let obj = {"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}
let s = JSON.stringify(obj)
//if we work with s, we’ll have the JSON available to us as a string rather than an object.
'{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}'
```
* Strings are useful for transporting but you’ll want to be able to convert them back to a JSON object on the client and/or the server side.
* JSON.parse() takes a JSON string and then transforms it into a JavaScript object.

```
let o = JSON.parse(s)
// we would have the object o to work with, which would be identical to the object obj.
```
* Another example,
```
const myObject = {
  dog: "🐕",
  cat: "🐈",
  koala: "🐨",
  count: 3
};

console.log(JSON.stringify(myObject));
// result: {"dog":"🐕","cat":"🐈","koala":"🐨","count":3}

console.log(JSON.parse(JSON.stringify(myObject)));
// result: Object {dog: "🐕", cat: "🐈", koala: "🐨", count: 3}
```

**API REQUEST**

* API stands for Application Program Interface, which can be defined as a set of methods of communication between various software components.
* API allows software to communicate with another software.
* A web API uses HTTP requests that correspond to the CRUD[which stands for Create, Read, Update, Delete] verbs.


|Action    |HTTP method   |Description|
|----------|--------------|-----------|
|Create    |POST          |Creates a new resource|
|Read      |GET           |Retrieves a resource  |
|Update    |PUT/PATCH     |Updates an existing resource|
|Delete    |DELETE        |Deletes a resource|
```
var request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      console.log(movie.title)
    })
  } else {
    console.log('error')
  }
}

request.send()
```

**JavaScript Hoisting**

* In JavaScript, a variable can be declared after it has been used.
* A variable can be used before it has been declared.

```
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x
```
**JavaScript only hoists declarations, not initializations**

**Searching for a String in a String**

* The search() method searches a string for a specified value and returns the position of the match

```
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
```
* The search() method cannot take a second start position argument.
* The indexOf() method cannot take powerful search values (regular expressions).

**Extracting String Parts**

* There are 3 methods for extracting a part of a string:
* slice(start, end)
* substring(start, end)
* substr(start, length)




