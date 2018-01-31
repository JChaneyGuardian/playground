const gulp = require('gulp');
const zip = require('gulp-zip');
 
gulp.task('zip', ["clean:bin","build"], () =>
    gulp.src('dist/**')
        .pipe(zip('package.zip'))
        .pipe(gulp.dest('bin/'))
);