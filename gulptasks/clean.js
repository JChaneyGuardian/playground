const gulp = require("gulp");
const del = require("del");


gulp.task('clean:bin', () => {
    del(['bin/*.*']).then(paths => {
        console.log('Deleted:\n', paths.join('\n'));
    });
});

gulp.task('clean:dist', () => {
    del(['dist/*.*']).then(paths => {
        console.log('Deleted:\n', paths.join('\n'));
    });
});

gulp.task('clean:serverless', () => {
    del(['.serverless/*.*']).then(paths => {
        console.log('Deleted:\n', paths.join('\n'));
    });
});