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
