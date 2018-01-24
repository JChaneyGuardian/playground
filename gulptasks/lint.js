
var gulp    = require("gulp");
var tslint      = require("gulp-tslint");

gulp.task("lint", function() {
    var config =  { 
        "formatter": "verbose",
        "extends": "tslint:recommended",
        "rules": {
        "quotemark": [true, "single", "avoid-escape"],
        "semicolon": [true, "always"],
        "prefer-const": true,
        "trailing-comma": false,
        "no-console": false
        }
    };
    
    return gulp.src([
        "src/**/**.ts"
    ])
    .pipe(tslint(config))
    .pipe(tslint.report());
});
