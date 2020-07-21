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
```const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

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
**sunstring()**

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



