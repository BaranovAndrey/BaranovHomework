var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
 
gulp.task('default', function () {
  return gulp.src('src/*.css')
    .pipe(concatCss('assets/css/style.css'))
    .pipe(gulp.dest('out/'));
});