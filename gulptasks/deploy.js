const gulp = require('gulp');
const serverless = require('serverless-gulp');
const util = require('gulp-util');
const rename = require('gulp-rename');
 
const paths = {
  serverless: ['./**/serverless.yml', '!node_modules/**/serverless.yml']
};
 
gulp.task('copy:serverlessyml', [], () => {
  return gulp.src(['serverless-dev.yml'])
    .pipe(rename('serverless.yml'))
    .pipe(gulp.dest('dist/'))
});

//gulp.task('deploy', ["zip", "clean:serverless"], () => {
gulp.task('deploy', ["copy:serverlessyml", "build"], () => {
  gulp.src(paths.serverless, { read: false })
      .pipe(serverless.exec('deploy', { stage: 'dev' }));
});