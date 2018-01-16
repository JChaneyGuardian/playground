// index.js in gulptask folder becomes the default module 
//   when require("./gulptasks") is used in gulpfile
// Add each task file defined in gulptasks to index.js 
//   to make it available in the gulp build system.
require("./build.js");
require("./lint.js");
require("./package.js");
require("./clean.js");