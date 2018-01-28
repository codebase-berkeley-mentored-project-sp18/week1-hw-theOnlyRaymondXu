function assert(statement, err) {
  if (!statement) {
    throw err;
  }
}

window.addEventListener("load", function() {
  // Question 1
  console.log("Testing question 1...");
  try {
    var returnZero = function(x) { return 0; };
    var makeDivisionTest = function(y) {
      return function(x) {
        return x % y === 0;
      }
    }
    var canDivideByOne = makeDivisionTest(1);
    var canDivideByTwo = makeDivisionTest(2);
    var canDivideByThree = makeDivisionTest(3);
    var filterEvens = makeFilter(canDivideByOne, canDivideByTwo, returnZero);
    var filterTwoAndThree = makeFilter(canDivideByThree, canDivideByTwo, returnZero);

    assert(filterEvens(8) === 0, "FAILED filterEvens(8) === 0");
    assert(filterEvens(7) === 7, "FAILED filterEvens(7) === 7");
    assert(filterEvens(1) === 1, "FAILED filterEvens(1) === 1");
    assert(filterTwoAndThree(6) === 0, "FAILED filterTwoAndThree(6) === 0");
    assert(filterTwoAndThree(5) === 5, "FAILED filterTwoAndThree(5) === 5");
    assert(filterTwoAndThree(-24) === 0, "FAILED filterTwoAndThree(-24) === 0");
    console.log("All test cases passed!");
  } catch (e) {
    console.error("Some test cases failed.");
  }

  // Question 2
  console.log("Testing question 2...");
  try {
    var badWords = ["fuck", "shit", "stanford"];
    assert(censorBadWords("fuck stanford", badWords) === "*CENSORED* *CENSORED*", "FAILED 'fuck stanford'");
    assert(censorBadWords("fuckstanford", badWords) === "fuckstanford", "FAILED 'fuckstanford'");
    assert(
      censorBadWords("fuck fuck fook fuck", badWords) === "*CENSORED* *CENSORED* fook *CENSORED*",
      "FAILED 'fuck fuck fook fuck'",
    );
    assert(censorBadWords("stanfurd", badWords) === "stanfurd", "FAILED 'stanfurd'");
    console.log("All test cases passed!");
  } catch (e) {
    console.error("Some test cases failed.");
  }

  // Question 3
  console.log("Testing question 3...");
  try {
    assert(getObjectNestingDepth({}) === 1, "FAILED depth 1 object without keys");
    assert(getObjectNestingDepth({ "key1": 1, "key2": 2 }) === 1, "FAILED depth 1 object with keys");
    assert(getObjectNestingDepth({
      "lvl1": {
        "lvl2": {
          "lvl3": "END"
        }
      }
    }) === 3, "FAILED depth 3 object");
    console.log("All test cases passed!");
  } catch (e) {
    console.error("Some test cases failed.");
  }

  // Question 4
  console.log("Testing question 4...");
  try {
    var dog = {
      noise: "woof",
      makeNoise: function () {
        return this.noise;
      },
    };
    var bark = dog.makeNoise;
    assert((typeof bark()) === 'undefined', "FAILED unbound function");
    var dogBark = bind(bark, dog);
    assert(dogBark() === 'woof', "FAILED bind basic function");
    var giveCommands = function(command1, command2, command3) {
      if (command1 === "sit" || command2 === "sit" || command3 === "sit") {
        return this.noise;
      }
      return "growl";
    }
    var giveDogCommands = bind(giveCommands, dog);
    assert(giveDogCommands("roll", "beg", "sit") === "woof", "FAILED function args list");
    console.log("All test cases passed");
  } catch (e) {
    console.error("Some test cases failed.");
  }
});
