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
