window.addEventListener("load", function() {
  // Question 1
  console.log("Testing question 1...");
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

  console.assert(filterEvens(8) === 0);
  console.assert(filterEvens(7) === 7);
  console.assert(filterEvens(1) === 1);
  console.assert(filterTwoAndThree(6) === 0);
  console.assert(filterTwoAndThree(5) === 5);
  console.assert(filterTwoAndThree(-24) === 0);

  // Question 2
  console.log("Testing question 2...");
  var badWords = ["fuck", "shit", "stanford"];
  console.assert(censorBadWords("fuck stanford", badWords) === "*CENSORED* *CENSORED*");
  console.assert(censorBadWords("fuckstanford", badWords) === "fuckstanford");
  console.assert(censorBadWords("fuck fuck fook fuck", badWords) === "*CENSORED* *CENSORED* fook *CENSORED*");
  console.assert(censorBadWords("stanfurd", badWords) === "stanfurd");


  // Question 3
  console.log("Testing question 3...");
  console.assert(getObjectNestingDepth({}) === 1);
  console.assert(getObjectNestingDepth({ "key1": 1, "key2": 2 }) === 1);
  console.assert(getObjectNestingDepth({
    "lvl1": {
      "lvl2": {
        "lvl3": "END"
      }
    }
  }) === 3);

});
