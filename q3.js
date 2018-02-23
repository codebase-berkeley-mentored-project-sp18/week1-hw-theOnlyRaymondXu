/*
Question 3 - JavaScript Objects
================================
JavaScript is not an object-oriented language. Despite that, it does have "objects"
that are more similar to dictionaries in Python and should be thought of as such.

The following function takes in a non-null object that may contain other objects.
It should return the maximum depth to which objects are nested.

Example:
>>> getObjectNestingDepth({})
--> 1
>>> getObjectNestingDepth({ "key1": 1, "key2": 2 })
--> 1
>>> getObjectNestingDepth({
      "lvl1": {
        "lvl2": {
          "lvl3": "END"
        }
      }
    })
--> 3
*/
function getObjectNestingDepth(inputObject) {
  //================
  // YOUR CODE HERE
  //================
  var keys = Object.keys(inputObject);
  if(typeof inputObject !== 'object') {
  	return 0;
  } else {
  	var max = 1;
  	for(var i = 0; i < keys.length; i+=1) {
  		console.log("here " + keys);
  		var key = keys[i];
  		var temp = 1 + getObjectNestingDepth(inputObject[key]);
  		max = Math.max(max, temp);
  	}
  	return max;
  }
}
