const gulp = require('gulp');
const serverless = require('serverless-gulp');
const util = require('gulp-util');
 
const paths = {
  serverless: ['./**/serverless.yml', '!node_modules/**/serverless.yml']
};
 
gulp.task('deploy', ["zip", "clean:serverless"], () => {
  gulp.src(paths.serverless, { read: false })
      .pipe(serverless.exec('deploy', { stage: 'dev' }));
});