var gulp = require('gulp');

// plugins
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');

// styles
gulp.task('styles', function () {
  return gulp.src('public/stylesheets/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/stylesheets'));
});

// scripts
gulp.task('lint', function () {
  return gulp.src('public/javascripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('scripts', ['lint']);

// watch
gulp.task('watch', function () {
  gulp.watch('public/stylesheets/*.scss', ['styles']);
  gulp.watch('public/javascritps/*.js', ['scripts']);
});

// build
gulp.task('build', ['styles', 'scripts']);

// Default
gulp.task('default', ['build', 'watch']);