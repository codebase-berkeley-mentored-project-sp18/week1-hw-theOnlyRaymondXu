/*
Question 4 - What is this?
==========================

Create a function that replicates the effect of the Function.prototype.bind() function.
That is, fill in the body of `bind` below such that it will create a new function identical to `f` that,
when called, has its `this` keyword set to the provided value of `obj`.

Example:
>>> var dog = {
      noise: "woof",
      makeNoise: function () {
        return this.noise;
      },
    };
>>> var bark = dog.makeNoise;
>>> bark();
--> undefined
>>> var dogBark = bind(bark, dog);
>>> dogBark();
--> "woof"

Example 2:
>>> var giveCommand = function(command) {
      if (command === "sit") {
        return this.noise;
      }
      return "growl";
    }
>>> giveCommand("sit");
--> undefined
>>> var giveDogCommand = bind(giveCommand, dog);
>>> giveDogCommand("sit");
--> "woof"
}
*/


function bind(f, obj) {
  //================
  // YOUR CODE HERE
  //================
}
