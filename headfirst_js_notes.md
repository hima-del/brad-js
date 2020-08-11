 **What exactly is a block of code?**

* Syntactically, a block of code is a set of statements, which could be one statement,or as many as you like, grouped togetherbetween curly braces.
* Once you’ve got a block of code, all the statements in that block are treated as a group to be executed together. 
* For instance, all the statements within the block in a while statement are executed if the condition of the while is true.
* The same holds for a block in an if or else if.

**= Vs == VS === in JavaScript**

* = is used for assigning values to a variable.
* == is used for comparing two variables, but it ignores the datatype of variable.
* === is used for comparing two variables, but this operator also checks datatype and compares two values.
* = is called as assignment operator
* == and === are called as comparison operators. 
* = does not return true or false.
* == Return true only if the two operands are equal.
* === returns true only if both values and data types are the same for the two variables.

 **If we’re trying to generate a number between 0 and 4, why does the code have a 5 in it, as in Math.floor(Math.random() * 5)?**
 
 * Math.random generates a number between 0 and 1, but not including 1.
 * The maximum number you can get from Math.random is 0.999....
 * When you multiply that number by 5, the highest number you’ll get is 4.999…
 * Math.floor always rounds a number down, so 1.2 becomes 1, but so does 1.9999. 
 * If we generate a number from 0 to 4.999… then everything will be rounded down to 0 to 4.
 * This is not the only way to do it, and in other languages it’s often done differently, but this is how you’ll see it done in most JavaScript code
 * So if I wanted a random number between 0 and 100 (including 100), I’d write Math.floor(Math.random() * 101)
 
 **NULL Vs UNDEFINED**
 
 * Null and Undefined are both data types in JavaScript.
 * Undefined is a variable that has been declared but not assigned a value.
 * Null as an assignment value => So you can assign the value null to any variable which basically means it’s blank.
 * So by not declaring a value to a variable, JavaScript automatically assigns the value to undefined. 
 
 ```
 let name; //undefined
 let age = null //null;
 ```
 ```
 console.log(typeOf null) //object
 console.log(typeOf undefined) //undefined
 ```
 * Remember, null is intended to represent an object that isn’t there.
 * Since these are different data types, if we compare them with strict equality ===, we get false.
 * But if we compare them with abstract equality ==, we get true.
 * So JavaScript does consider these to be relatively equal since they both represent an empty value.

 ```
 console.log(null===undefined) //false
 console.log(null==undefined) //true
```

**parseInt Vs parseFloat**

* JavaScript provides two methods for converting non-number primitives into numbers => parseInt() and parseFloat() . 
* parseInt() converts  a value to ana integer.
* parseFloat() converts  a value into a floating-point number.

**Function => arguments and parameters**

* When you call a function you pass it arguments and those arguments then get matched up with the parameters in the function definition. 
* Each argument is passed to its corresponding parameter in the function.
* Each parameter acts as a variable within the function.
* When you define a function you can define it with one or more parameters. 
* When you call a function, you call it with arguments.

**pass by value**

* In Pass by Value, Function is called by directly passing the value of the variable as the argument. 
* Changing the argument inside the function doesn’t affect the variable passed from outside the function.
* if the function changes the value of the parameter, this change is not reflected globally or in the calling function.

```
function callByValue(varOne, varTwo) { 
  console.log("Inside Call by Value Method"); 
  varOne = 100; 
  varTwo = 200; 
  console.log("varOne =" + varOne +"varTwo =" +varTwo); 
} 
let varOne = 10; 
let varTwo = 20; 
console.log("Before Call by Value Method"); 
console.log("varOne =" + varOne +"varTwo =" +varTwo); 
callByValue(varOne, varTwo) 
console.log("After Call by Value Method"); 
console.log("varOne =" + varOne +"varTwo =" +varTwo); 

output will be : 
--------------- 
Before Call by Value Method 
varOne =10 varTwo =20 
Inside Call by Value Method 
varOne =100 varTwo =200 
After Call by Value Method 
varOne =10 varTwo =20
```

**scope of a variable**

* If the variable is declared outside a function, then you can use it anywhere in your code. 
* If a variable is declared inside a function, then you can use it only within that function => This is known as a variable’s scope.
* There are two kinds of scope: global and local.
* If a variable is declared outside a function, it’s GLOBAL. 
* If it’s declared inside a function, it’s LOCAL.
* The variables you define outside a function are globally scoped, and the function variables are locally scoped
* If you use a variable without declaring it first, that variable will be global. 
* That means that even if you use a variable for the first time inside a function (because you meant for it to be local), the variable will actually be global, and be available   outside the function too (which might cause confusion later). So, don’t forget to declare locals!

```
function playTurn(player, location) {
 points = 0;
 if (location == 1) {
 points = points + 100;
 }
 return points;
}
var total = playTurn("Jai", 1);
alert(points);
```
* We forgot to declare points with “var/let/const” before we used it. So points is automatically global.
* That means we can use points outside the function! The value doesn’t go away (like it should) when the function is done executing
* If you forget to declare a local variable using var/let/const, that variable will be global, which could have unintended consequences in your program

**What happens when I name a local variable the same thing as an existing global variable?**

* Within the body of a function, a local variable takes precedence over a global variable with the same name. 
* If you declare a local variable or function parameter with the same name as a global variable, you effectively hide the global variable.
* For example, the following code prints the word “local”:

```
var scope = "global";         // Declare a global variable
function checkscope( ) {
    var scope = "local";      // Declare a local variable with the same name
    document.write(scope);    // Use the local variable, not the global one
}
checkscope( );                 // Prints "local"
```
https://www.oreilly.com/library/view/javascript-the-definitive/0596101996/ch04.html

**Javascript Objects**

* They are just a acollection of properties

**How to create an object**

* Add a variable declaration for the object.
* Next, start an object with a left curly brace.
* Then all the object’s properties go inside
* Each property has a name, a colon and then a value.
* Each property is separated by a comma. 
* We end the object with a closing curly brace, and just like any other variable declaration, we end this one with a semicolon.

```
let chevy = {
 make: "Chevy",
 model: "Bel Air",
 year: 1957,
 color: "red",
 passengers: 2,
 convertible: false,
 mileage: 1021
 };
 ```

* Make sure you enclose your object in curly braces
* Separate property name and property value with a colon
* A property name can be a string, but we usually stick with valid variable names:Notice that if we are using a string with a aspace in it for  a property name, we need to use quotes around the name.

```
 let widget = {
 cost: 3.14,
 "on sale": true
};
```

**WE CAN USE A OBJECT'S PROPERTY JUST LIKE WE USE A VARIABLE, EXCEPT WE NEED TO USE DOT NOTATION TO ACCESS THE PROPERTY IN THE OBJECT**


**How does a variable hold an object?**

* Variables don’t actually hold objects.
* Instead they hold a reference to an object.
* The reference is like a pointer or an address to the actual object.
* A variable doesn’t hold the object itself, but it holds something like a pointer. 
* In JavaScript we don’t reathis keyword refers to an object, that object which is executing the current bit of javascript code.
In other words, every javascript function while executing has a reference to its current execution context, called this. Execution context means here is how the function is called.
To understand this keyword, only we need to know how, when and from where the function is called, does not matter how and where function is declared or defined.lly know what is inside a reference variable => We do know that whatever it is, it points to our object.
* When we use dot notation, the JavaScript interpreter takes care of using the reference to get the object and then accesses its properties for us.
* For example:
```
 car.color;
 ```
* This means “use the object referenced by the variable car to access the color property.”

**Initializing an object (a reference) variable**

* When you declare and initialize an object, you make the object using object notation, but that object won’t fit in the cup. 
* So what goes in the cup is a reference to the object

```
let myCar = {...};
```

* A reference to the Car object goes into the variable.
* The Car object itself does not go into the variable! 

**passing objects to functions**

*  when you call a function and pass it an object, you’re passing the object reference, not the object itself.
* So using our pass by value semantics, a copy of the reference is passed into the parameter, and that reference remains a pointer to the original object

**this keyword**

* this keyword refers to an object, that object which is executing the current bit of javascript code.
* Every javascript function while executing has a reference to its current execution context, called this. 
* Execution context means here is how the function is called.
* To understand this keyword, only we need to know how, when and from where the function is called, does not matter how and where function is declared or defined.


**What’s the difference between a method and a function**

* A method is just a function that’s been assigned to a property name in an object.
* You call functions using the function name, while you call methods using the object dot notation and the name of the property. 
* You can also use the keyword this in a method to refer to the object whose method was called
*  A method is a function
* We just call it a method because it lives inside an object. 
* So, a method can do anything a function can do precisely because a method is a function.

**When is the value of this set to the object? When we define the object, or when we call the method?**

* The value of this is set to the object when you call the method. 
* So when you call fiat.start(), this is set to fiat, and when you call chevy.start(), this is set to chevy. 
* It looks like this is set when you define the object, because in fiat.start, this is always set to fiat, and in chevy.start, this is always set to chevy. 
* There is a good reason the value of this is set when you call the method and not when you define the object.


**for...of Vs for...in loops**

* for..of and for…in loops give us a very clean and concise syntax to iterate over all kinds of iterables and enumerables like strings, arrays and object literals.
* Use for…of to iterate over the values in an iterable, like an array

```
let animals = ['🐔', '🐷', '🐑', '🐇'];
let names = ['Gertrude', 'Henry', 'Melvin', 'Billy Bob'];

for (let animal of animals) {
  // Random name for our animal
  let nameIdx = Math.floor(Math.random() * names.length);

  console.log(`${names[nameIdx]} the ${animal}`);
}

// Henry the 🐔
// Melvin the 🐷
// Henry the 🐑
// Billy Bob the 🐇
```
* Strings are also an iterable type, so you can use for…of on strings:

```
let str = 'abcde';

for (let char of str) {
  console.log(char.toUpperCase().repeat(3));
}

// AAA
// BBB
// ...
```

**for...in loop**

* Use for…in to iterate over the properties of an object (the object keys)

```
let oldCar = {
  make: 'Toyota',
  model: 'Tercel',
  year: '1996'
};

for (let key in oldCar) {
  console.log(`${key} --> ${oldCar[key]}`);
}

// make --> Toyota
// model --> Tercel
```
* We can also use for…in to iterate over the index values of an iterable like an array or a string:

```
let str = 'Turn the page';

for (let index in str) {
  console.log(`Index of ${str[index]}: ${index}`);
}

// Index of T: 0
// Index of u: 1
```

```
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```

**How behavior affects state...**

* Objects contain state and behavior.
* An object’s properties allow us to keep state about the object.
* An object’s methods allow us to have behavior.



**onload property of window object**

*  first create a function that has the code you’d like executed once the page is fully loaded. 
* After you’ve done that, you take the window object, and assign the function to its onload property
* The window object will call any function you’ve assigned to its onload property, but only after the page is fully loaded.

```
<script>
function init() {
 var planet = document.getElementById("greenplanet");
 planet.innerHTML = "Red Alert: hit by phaser fire!";
}
window.onload = init;
</script>
```

* Here, we’re assigning the function init to the window.onload property. 
* Make sure we don't use parentheses after the function name!
* We're not calling the function; we're just assigning the function value to the window.onload property. 
* Here the event is the “page is loaded” event.
* A common way to deal with that situation is through a callback, also known as an event handler.
* A callback works like this: give a function to the object that knows about the event => When the event occurs, that object will call you back, or notify you, by calling that
 function. 


**How to set an attribute with setAttribute**

```
planet.setAttribute("class", "redtext");
```

* We take our element object =>planet
* And we use its setAttribute method to either add a new attribute or change an existing attribute.
* The method takes two arguments, the name of the attribute you want to set or change and  the value you'd like to set that attribute to.
* Note if the attribute doesn’t exist a new one will be created in the element.

**NaN**

* JavaScript uses the value NaN, more commonly known as “Not a Number”, to represent numeric results that, well, can’t be represented.
* Take 0/0 for instance => 0/0 evaluates to something that just can’t be represented in a computer, so it is represented by NaN in JavaScript.
* NaN MAY BE THE WEIRDEST VALUE IN THE WORLD. 
* Not only does it represent all the numeric values that can’t be represented, it is the only value in JavaScript that isn’t equal to itself!
* If you compare NaN to NaN, they aren’t equal!
* NaN isn’t equal to anything, not even itself, so, any kind of test for equality with NaN is off the table.
* Instead we need to use a special function: isNaN. 
```
if (isNaN(myNum)) {
 myNum = 0;
}
```

* Use the isNaN function, which returns true if the value passed to it is not a number.

**understanding the equality operator**

**CASE#1: Comparing a number and a string**
* If you’re comparing a string and a number the same thing happens every time => the string is converted into a number, and the two numbers are then compared.
* This doesn’t always go well, because not all strings can be converted to numbers. 
* 99 == "vanilla" => 99 == NaN => false
* Here we’re comparing a number and a string. 
* But this time, when we try to convert the string to a number, we fail.
* When we try to convert “vanilla” to a number, we get NaN, and NaN isn’t equal to anything. And so the result is false.

**CASE#2: Comparing a boolean with any other type**
* In this case, we convert the boolean to a number, and compare. 
* true converts to 1 and false converts to 0. 
* sometimes this case requires doing more than one type conversion
* 1==true => 1==1 => true
* "1"==true => "1"==1 => 1 == 1 => true

**CASE#3: Comparing null and undefined**
* Comparing these values evalutates to true. 
* These values both essentially represent “no value” (that is, a variable with no value, or an object with no value), so they are considered to be equal.
* undefined == null => true
* Undefined and null are always equal.

**CASE#4**
* 1 == "" => 1 == 0 => false
* Here we’re comparing a number and a string.
* The empty string is converted to the number 0.
* 1 and 0 are not the same => So this evaluates to false.

**What happens if I compare a number, like 99, to a string, like “ninety-nine”, that can’t be converted to a number?**
* JavaScript will try to convert “ninety-nine” to a number, and it will fail, resulting in NaN. 
* So the two values won’t be equal, and the result will be false.

**what if I try something like “true” == true?**
* That is comparing a string and a boolean, so according to the rules, JavaScript will first convert true to 1, and then compare “true” and 1.
* It will then try to convert “true” to a number, and fail, so you’ll get false

**Two values are strictly equal only if they havethe same type and the same value**
* === will find two values equal only if they are the same type and the same value.


**look at concatenation and addition**

* We figured out that when you use the + operator with numbers you get addition, and when you use it with strings you get concatenation.
* If you try to add a number and a string, JavaScript converts the number to a string and concatenates the two (opposite of what it does with equality)
```
let addi = 3 + "4";
```
* When we have a string added to a number, we get concatenation, not addition.
* The result variable is set to “34" (not 7).

 **So if I want JavaScript to convert a string into a number to add it to another number, how would I do that?**
* There’s a function that does this named Number 
```
 let num = 3 + Number("4");
 ```
* This statement results in num being assigned the value 7. 
* The Number function takes an argument, and if possible, creates a number from it. 
* If the argument can’t be converted to a number, Number returns.... wait for it..... NaN.

**How to determine if two objects are equal**

* When we test equality of two object variables, we compare the references to those objects
*  variables hold references to objects, and so whenever we compare two objects, we’re comparing object references.
* Two references are equal only if they reference the same object
* The only way a test for equality between two variables containing object references returns true is when the two references point to the same object

**truthy and falsy**

* There are values in JavaScript that aren’t true or false, but that are nevertheless treated as true or false in a conditional. 
* We call these values truthy and falsey precisely because they aren’t technically true or false, but they behave like they are (again, inside a conditional). 
* Concentrate on knowing what is falsey, and then everything else you can consider truthy

```
var testThis;
if (testThis) {
 // do something
}
var element = document.getElementById("elementThatDoesntExist");
if (element) {
 // do something
}
if (0) {
 // do another thing
}
if ("") {
 // does code here ever get evaluated? Place your bets.
}
if (NaN) {
 // Hmm, what's NaN doing in a boolean test?
}
```

* To remember which values are truthy and which are falsey, just memorize the five falsey values— undefined, null, 0, "” and NaN—and remember that everything else is truthy.
*  Here are some examples of truthy values:

```
if ([]) {       //This is an array. It's not undefined, null, zero, “” or NaN. It has to be true!
 // this will happen
}
var element = document.getElementById("elementThatDoesExist");
if (element) {
 // so will this
}
if (1) {            //Only the number 0 is falsey, all others are truthy
 // gonna happen
}
var string = "mercy me";
if (string) {         //Only the empty string is falsey, all other strings are truthy.
 // this will happen too
}
```
**Strings**

**The length property**

* The length property holds the number of characters in the string. 
* It’s quite handy for iterating through the characters of the string.

**The charAt method**

* The charAt method takes an integer number between zero and the length of the string (minus one), and returns a string containing the single character at that position of
  the string. 
* Think of the string a bit like an array, with each character at an index of the string, with the indices starting at 0 (just like an array).
* If you give it an index that is greater than or equal to the length of the string, it returns the empty string.

```
 let input = "jenny@wickedlysmart.com";
 for(var i = 0; i < input.length; i++) {
 if (input.charAt(i) === "@") {
 console.log("There's an @ sign at index " + i);
 }
 }
```

**The indexOf method**

* This method takes a string as an argument and returns the index of the first character of the first occurrence of that argument in the string.

```
let phrase = "the cat in the hat";
let index = phrase.indexOf("cat");
console.log("there's a cat sitting at index " + index); ////there's a cat sitting at index 4
```

* You can also add a second argument, which is the starting index for the search
* Because we're starting the search at index 5, we're skipping the first “the" and finding the second “the” at index 11.
```
index = phrase.indexOf("the", 5);
console.log("there's a the sitting at index " + index); //there's a the sitting at index 11
```

```
index = phrase.indexOf("dog");
console.log("there's a dog sitting at index " + index); //there's a dog sitting at index -1
```

**The substring method**

* Give the substring method two indices, and it will extract and return the string contained within them.

```
let data = "name|phone|address";
let val = data.substring(5, 10);
console.log("Substring is " + val);
```
* We'd like the string from index 5 and up to (but not including) 10 returned

**The split method**

* The split method takes a character that acts as a delimiter, and breaks the string into parts based on the delimiter.

```
let data = "name|phone|address";
let vals = data.split("|");
console.log("Split array is ", vals);                       //Split array is  [ 'name', 'phone', 'address' ]
```

**instanceOf operator**

* The instanceof operator in JavaScript is used to check the type of an object at run time.
* It returns a boolean value if true then it indicates that the object is an instance of a particular class and if false then it is not.

**we take the letter and convert it to a number by using a helper array that contains the letters A-F. To get the number, we can use the indexOf method to get the index of the letter in the array**

```
function parseGuess(guess) {
 var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
 if (guess === null || guess.length !== 2) {
 alert("Oops, please enter a letter and a number on the board.");
 } else {
 firstChar = guess.charAt(0);
 var row = alphabet.indexOf(firstChar);
 }
}
```

**document.getElementsByTagName**

* This method takes a tag name, like img or p or div, and returns a list of elements that match it
*  It returns an object that you can treat like an array, but it’s actually an object called a NodeList. 
* A NodeList is a collection of Nodes, which is just a technical name for the element objects that you see in the DOM tree. 
* You can iterate over this collection by getting its length using the length property, and then access each item in the NodeList using an index with the bracket notation,
  just like an array.

**what is an event handler**

* We write handlers to handle events. 
* Handlers are typically small pieces of code that know what to do when an event occurs.
* In terms of code, a handler is just a function.
* When an event occurs, its handler function is called. 
* For example 

```
function pageLoadedHandler() {
 alert("I'm alive!");
}

window.onload = pageLoadedHandler;
```

**setTimeout**

* setTimeout allows us to run a function once after the interval of time.

```
function timerHandler() {
 alert("Hey what are you doing just sitting there staring at a blank screen?");
}

setTimeout(timerHandler, 5000);
```
* First we write an event handler. 
* This is the handler that will be called when the time event has occurred.
* Using setTimeout is a bit like setting a stop watch. 
* Here we’re asking the timer to wait 5000 milliseconds (5 seconds).
* And then call the handler timerHandler.
* And here, we call setTimeout, which takes two arguments: the event handler and a time duration (in milliseconds).
*  setTimeout function essentially creates a countdown timer and associates a handler with that timer. 
* That handler is called when the timer hits zero.
* Now to tell setTimeout what handler to call, we need to pass it a reference to the handler function.
* setTimeout stores the reference away to use later when the timer has expired.


**setInterval**

* setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

```
let tick = true;
function ticker() {
 if (tick) {
 console.log("Tick");
 tick = false;
 } else {
 console.log("Tock");
 tick = true;
 }
}
setInterval(ticker, 1000);
```

* To stop an interval timer, save the result of calling setInterval in a variable and then pass that to clearInterval later, when you want to stop the timer.

```
let t = setInterval(ticker, 1000);
clearInterval(t);
```

**function declaration Vs function expressions**

```
function quack(num) {
 for (let i = 0; i < num; i++) {
 console.log("Quack!");
 }
}
quack(3);
```

*  formally, the first statement above is a function declaration, which creates a function that has a name—in this case quack—that can be used to reference and invoke the          function.

```
let fly = function(num) {
 for (let i = 0; i < num; i++) {
 console.log("Flying!");
 }
};
fly(3);
```

* When we use the function keyword this way—that is, within a statement, like an assignment statement—we call this a function expression. 
* Unlike the function declaration, this function doesn’t have a name.
* The expression results in a value that is then assigned to the variable fly. 
* We are assigning it to the variable fly and then later invoking it, so it must be a reference to a function
* Function declarations are evaluated before the rest of the code is evaluated.
* Function expressions get evaluated later, with the rest of the code.
* A function declaration doesn’t return a reference to a function; rather it creates a variable with the name of the function and assigns the new function to it.
* A function expression returns a reference to the new function created by the expression.
* The process of invoking a function created by a declaration is exactly the same for one created with an expression.
* You can hold function references in variables.
* Function declarations are statements;function expressions are used in statements.

**How can a function be an expression?**

* An expression is anything that evaluates to a value. 
* 3+4 evaluates to 7, Math.random() * 6 evaluates to a random number, and a function expression evaluates
  to a function reference. 
  
  **Difference between function declaration and function expression**
  
  * With a declaration, a function is created and setup before the rest of the code gets evaluated.
  * With a function expression, a function is created as the code executes, at runtime.
  * Another difference has to do with function naming— when you use a declaration, the function name is used to create and set up as a variable that refers to the function.
  * When you use a function expression, you typically don’t provide a name for the function, so either you end up assigning the function to a variable in code, or you
    use the function expression in other ways. 
  * Remember quack is defined with a function declaration, and fly with a function expression. 
  * Both result in function references, which are stored in the variables quack and fly.
  * The function declaration takes care of assigning the reference to a variable with the name you supply => in this case quack.
  * When you have a function expression, you need to assign the resulting reference to a variable yourself => Here we’re storing the reference in the fly variable.
  
  **“What makes JavaScript functions first class?”**
  
     ❏ We can assign functions to variables.
     ❏ We can pass functions to functions.
     ❏ We can return functions from functions.
     
     
 **Array sort methods**
 
 * The sort() method allows you to sort elements of an array in place. Besides returning the sorted array, the sort() method changes the positions of the elements in the            original array.
 * By default, the sort() method sorts the array elements in ascending order with the smallest value first and largest value last.
 * The sort() method casts elements to strings and compares the strings to determine the orders.
 
 ```
 let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort();
console.log(numbers);
//output
[ 0, 1, 10, 2, 20, 3, 30 ]
```

* In this example, the sort() method places 10 before 2 because the string “10” comes before “2” when doing a string comparison.
* To fix this, you need to pass a comparison function to the sort() method. 
* The sort() method will use the compare function to determine the orders of elements.

```
array.sort(comparefunction)
```

* The sort() method accepts an optional argument which is a function that compares two elements of the array.
* If you omit the compare function, the sort() method sorts the elements with the sort order based on the Unicode code point values of elements as mentioned earlier.
* The compare function of the sort() method accepts two arguments and returns a value that determines the sort order

```
function compare(a,b) {
  // ...
}
```

* The compare() function accepts two arguments a and b. The sort() method will sort elements based on the return value of the compare() function with the following rules:
   * If compare(a,b) is less than zero, the sort() method sorts a to a lower index than b. In other words, a will come first.
   * If compare(a,b) is greater than zero, the sort() method sort b to a lower index than a, i.e., b will come first.
   * If compare(a,b) returns zero, the sort() method considers a equals b and leaves their positions unchanged.

```
let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort(function(a,b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(numbers);

//Output
[ 0,  1,  2, 3, 10, 20, 30 ]

```

* The sort method has sorted numbersArray in ascending order because when we return the values 1, 0 and -1, we’re telling the sort method:
*  1: place the first item after the second item
*  0: the items are equivalent, you can leave them in place
* -1: place the first item before the second item.

* You know that the comparison function we pass to sort needs to return a number greater than 0, equal to 0, or less than 0 depending on the two items we’re comparing: 
* if the first item is greater than second, we return a value greater than 0; if first item is equal to the second, we return 0; and if the first item is less than the second,     we return a value less than 0. 

```
function compareNumbers(num1, num2) {
 return num1 - num2;
}
```

     


