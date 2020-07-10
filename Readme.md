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

**Difference between map() and forEach**

* The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
* The forEach() method executes a provided function once for each array element.
* forEach() does not mutate the array on which it is called



  


