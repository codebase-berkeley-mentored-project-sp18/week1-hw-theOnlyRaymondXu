var page = require('webpage').create();
var fs = require('fs');

page.open(fs.workingDirectory + fs.separator + "index.html");

page.onError = function(msg, trace) {
  console.error(msg);
}
