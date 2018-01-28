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
    window.setTimeout(function() {
      if (!loadInProgress) {
        page.evaluate(function() {
          console.log(window.onload);
          window.main();
        });
        phantom.exit();
      }
    }, 1000);
  }
});

page.onError = function(msg, trace) {
  console.error(msg);
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
