var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

gulp.task('less', function() {
  return gulp.src('./design/stylesheets/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./design/stylesheets/css/'));
    //.pipe(livereload());
});

gulp.task('watch', function () {
  //livereload.listen({ host: '192.168.0.1' });
  gulp.watch('./design/stylesheets/less/**/*.less', ['less']);
});

gulp.task('default', ['watch']);
