/*
Question 1 - Operators and Functions
=============================================
We would like to construct a filter that applies a function h on an input only if
for other input functions f and g, both f(x) and g(x) are true.

Implement a function that takes in input functions f, g, and h, and returns a
filter function p. p(x) should return h(x) if and only if f(x) and g(x) are both true.

Example:
>>> var alwaysTrue = function(x) { return true; };
>>> var increment = function(x) { return x+1; };
>>> var incrementAlways = makeFilter(alwaysTrue, alwaysTrue, increment);
>>> incrementAlways(1);
--> 2
>>> incrementAlways(3);
--> 4

>>> var canDivideByFour = function(x) { return x % 4 === 0; };
>>> var canDivideByThree = function(x) { return x % 3 === 0; };
>>> var incrementSometimes = makeFilter(canDivideByThree, canDivideByFour, increment);
>>> incrementSometimes(1);
--> 1
>>> incrementSometimes(3);
--> 3
>>> incrementSometimes(12);
--> 13

*/

function makeFilter(f, g, h) {
  return function(x) {
    if (f(x) && g(x)) {
      return h(x);
    }
    return x;
  };
}
