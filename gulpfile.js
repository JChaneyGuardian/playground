var gulp = require("gulp");
//var runSequence = require("run-sequence");

require("./gulptasks")

gulp.task("default", ["package"], function (cb) {
    //runSequence("lint", "build", cb);
  });
  