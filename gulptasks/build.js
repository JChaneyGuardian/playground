var gulp    = require("gulp");
var tsc     = require("gulp-typescript");
var tstProject = tsc.createProject("tsconfig.json");

gulp.task("build", ["lint", "clean:dist"], function() {
    return gulp.src([
        "src/**/*.ts",
        "src/**/*.tsx"
    ])
    .pipe(tstProject())
    .on("error", function (err) {
        process.exit(1);
    })
    .js.pipe(gulp.dest("dist/"));
});