var gulp = require("gulp");
var del = require('del');
    

gulp.task('clean:dist', (done) => {

    var directories = [
        "./dist"
    ];
    
    del(directories).then(() => done());
});

gulp.task('clean:public', (done) => {

    var directories = [
        "./public"
    ];
    
    del(directories).then(() => done());
});