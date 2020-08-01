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






