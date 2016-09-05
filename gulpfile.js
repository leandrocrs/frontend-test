var gulp = require('gulp')

// plugins
var sass = require('gulp-sass')
var jshint = require('gulp-jshint')
var concat = require('gulp-concat')
var autoprefixer = require('gulp-autoprefixer')

// styles
gulp.task('styles', function () {
  return gulp.src('public/stylesheets/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['> 5%', 'ie >= 8']
    }))
    .pipe(gulp.dest('public/stylesheets'))
})

// scripts
gulp.task('lint', function () {
  return gulp.src('public/javascripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
})

gulp.task('scripts', ['lint'])

// watch
gulp.task('watch', function () {
  gulp.watch('public/stylesheets/*.scss', ['styles'])
  gulp.watch('public/javascritps/*.js', ['scripts'])
})

// build
gulp.task('build', ['styles', 'scripts'])

// serve
gulp.task('serve', function () {
  var app = require('connect')()
  var serveStatic = require('serve-static')

  app.use(serveStatic('public'))

  console.log(' ➜   Open: http://localhost:7007')
  app.listen(7007)
})

// Default
gulp.task('default', ['build', 'watch', 'serve'])