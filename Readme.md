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

   
