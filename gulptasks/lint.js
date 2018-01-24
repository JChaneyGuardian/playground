
var gulp    = require("gulp");
var tslint      = require("gulp-tslint");

gulp.task("lint", function() {
var config =  { formatter: "verbose" };
    return gulp.src([
        "src/**/**.ts"
    ])
    .pipe(tslint(config))
    .pipe(tslint.report());
});
