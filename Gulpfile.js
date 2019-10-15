const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify-es').default;

gulp.task('uglify', function () {
  return gulp.
    src("src/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("public/scripts"));
});

gulp.task('sass', () => {
  return gulp
    .src('src/styles/app.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('public/styles')); 
});

gulp.task('copy-images', function() {
  return gulp
    .src('src/images/**/*')
    .pipe(gulp.dest('public/images'));
});

gulp.task('copy-scripts', function() {
  return gulp
    .src('src/scripts/*.js')
    .pipe(gulp.dest('public/scripts'));
});

gulp.task('copy', function() {
  return gulp
    .src([
      'src/pwa/**/*',
      'src/favicon.ico',
    ])
    .pipe(gulp.dest('public'));
});

gulp.task('dev', ['sass', 'copy-images', 'copy-scripts'], () => {
  gulp.watch('src/scripts/*.js', ['copy-scripts']);
  gulp.watch('src/styles/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'uglify', 'copy', 'copy-images']);