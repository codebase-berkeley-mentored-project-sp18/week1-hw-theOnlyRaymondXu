var page = require('webpage').create();
var fs = require('fs');

var loadInProgress = false;

page.open(fs.workingDirectory + fs.separator + "index.html");

var interval = setInterval(function() {
  if (!loadInProgress) {
    phantom.exit();
  }
}, 250);

page.onError = function(msg, trace) {
  console.error(msg);
  phantom.exit(1);
}
page.onConsoleMessage = function(msg, lineNum, sourceId) {
  console.log('CONSOLE: ' + msg + ' (from line #' + lineNum + ' in "' + sourceId + '")');
};
page.onLoadStarted = function() {
  loadInProgress = true;
  console.log("load started");
};
page.onLoadFinished = function() {
  console.log("load finished");
  loadInProgress = false;
}
