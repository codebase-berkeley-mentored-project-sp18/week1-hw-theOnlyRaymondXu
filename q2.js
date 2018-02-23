/*
Question 2 - Arrays and Strings
======================================================

The following function takes in a string as well as an array of bad words.
The function should return the first input but with all occurences of bad words
replaced by the string "*CENSORED*" (no quotes).

PRECONDITION: The input string contains only alphanumeric characters and spaces.

Example:
>>> censorBadWords("you buy too much fuckin shit", ["shit", "fuck"])
--> "you buy too much fuckin *CENSORED*"
>>> censorBadWords("youbuytoomuchfuckinshit", ["shit", "fuck"])
--> "youbuytoomuchfuckinshit"
*/
function censorBadWords(inputStr, badWords) {
  //================
  // YOUR CODE HERE
  //================
  
  var original = inputStr.split(" ");
  var result = "";
  for (var i = 0; i < original.length; i+=1) {
  	if (badWords.indexOf(original[i]) > -1) {
  		result += "*CENSORED*" + " ";
  	} else {
  		result += original[i] + " ";
  	}
  }
  return result.trim();
}
