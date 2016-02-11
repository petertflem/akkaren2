var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');

gulp.task('less', function() {
  return gulp.src('./design/stylesheets/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./design/stylesheets/css/'))
});

gulp.task('watch', function () {
  gulp.watch('./design/stylesheets/less/**/*.less', ['less']);
});

gulp.task('default', ['watch']);
