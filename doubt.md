1. not getting output for planets exercise when window.onload function is used [page 249]
2. Page 291 and 292
```
var element = document.getElementById("elementThatDoesExist");
if (element) {     //This time we have an actual element object.That's not falsy either, so it's truthy
 // so will this
}
```
```
var element = document.getElementById("elementThatDoesntExist");
if (element) {        //Here the value of element is null.What's that going to do?
 // do something
}
```


