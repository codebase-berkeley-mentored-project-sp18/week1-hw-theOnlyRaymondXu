# Mentored Project Week 1 Homework - JavaScript

## Instructions

### Submitting the Homework

**For this assignment you can ignore the autograder output.**

Your submissions will be done through git. We'll automatically run tests against each git commit - you can see the results
of the tests by clicking on the checkmarks in your GitHub commit list. To commit and push your work to GitHub, do

```
git add -A
git commit -m "<YOUR COMMIT MESSAGE HERE>"
git push
```

If you don't want to wait for the autograder to see if your code works, you can run the tests manually by opening up `index.html` in a web browser.

## Homework Questions

Welcome to the mentored project! This week's homework is just to get you familiar with using JavaScript. The questions you need to complete are short and simple. Once you've completed the questions, check the branch `solutions` for the homework solutions.

### Question 1 - Operators and Functions

Reading: [Operators](https://theandrewchan.gitbooks.io/javascript-crash-course/content/chapter1.html) [Functions](https://theandrewchan.gitbooks.io/javascript-crash-course/content/functions.html)

We would like to construct a filter that applies a function h on an input only if
for other input functions f and g, both f(x) and g(x) are true.

In q1.js, implement a function that takes in input functions f, g, and h, and returns a
filter function p. p(x) should return h(x) if and only if f(x) and g(x) are both true.

### Question 2 - Arrays and Strings

Reading: [Arrays](https://theandrewchan.gitbooks.io/javascript-crash-course/content/arrays.html)

In q2.js, implement a function that takes in a string as well as an array of bad words,
and returns the first input but with all occurences of bad words
replaced by the string "*CENSORED*".

You may assume that the input string contains only alphanumeric characters and spaces.

### Question 3 - JavaScript Objects

Reading: [Objects, 4.1-4.2](https://theandrewchan.gitbooks.io/javascript-crash-course/content/objects.html)

In q3.js, implement a function takes in a non-null object that may contain other objects
and returns the maximum depth to which objects are nested.

### Question 4 - What is `this`?

Reading: [Objects, 4.3](https://theandrewchan.gitbooks.io/javascript-crash-course/content/objects.html)

In q4.js, create a function that replicates the effect of the [`Function.prototype.bind()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) function.
That is, fill in the body of `bind` below such that it will create a new function identical to `f` that,
when called, has its `this` keyword set to the provided value of `obj`. _Don't use any of the following functions_:
* [`Function.prototype.bind()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
* [`Function.prototype.call()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
* [`Function.prototype.apply()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

Once you finish filling in the function, look at the solution (located in branch `solutions`), which may be
different than your code. What is the expected behavior of the solution when you bind a function more than once, e.g. in the following code:

```javascript
var personA = {
  name: "Andrew",
  sayHi: function() {
    return this.name;
  },
};
var brianSaysHi = bind(personA.sayHi, { name: "Brian" });
var andrewSaysHi = bind(brianSaysHi, personA);
andrewSaysHi();
```

Does it work the same as the real `Function.prototype.bind` function?
