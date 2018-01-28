var page = require('webpage').create();
var fs = require('fs');

function getFileUrl(str) {
  var pathName = fs.absolute(str).replace(/\\/g, '/');
  // Windows drive letter must be prefixed with a slash
  if (pathName[0] !== "/") {
    pathName = "/" + pathName;
  }
  return encodeURI("file://" + pathName);
};


var loadInProgress = true;
console.log(getFileUrl("index.html"));
page.open(getFileUrl("index.html"), function (status) {
  if (status !== 'success') {
    phantom.exit(1);
  } else {
    // try to inject page.js
    if (
      page.injectJs("q1.js") &&
      page.injectJs("q2.js") &&
      page.injectJs("q3.js") &&
      page.injectJs("q4.js") &&
      page.injectJs("main.js")
    ) {
      // scripts were injected, so evaluate:
      var result = page.evaluate(function() {
          return document.body.getAttribute("data-changed") || "not found";
      });
      console.log(result);
      phantom.exit();
    }
    console.log("Failed to inject scripts");
    phantom.exit(1);
  }
});

page.onError = function(msg, trace) {
  console.log("TEST FAILED--> " + msg);
  phantom.exit(1);
}
page.onConsoleMessage = function(msg, lineNum, sourceId) {
  console.log('CONSOLE: ' + msg + ' (from line #' + lineNum + ' in "' + sourceId + '")');
};
page.onLoadStarted = function() {
  console.log("load started");
};
page.onLoadFinished = function() {
  console.log("load finished");
  loadInProgress = false;
}
