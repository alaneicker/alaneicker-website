const gulp = require('gulp');
const sass = require('gulp-sass');

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

gulp.task('copy', function() {
  return gulp
    .src([
      'src/pwa/**/*',
      'src/favicon.ico',
    ])
    .pipe(gulp.dest('public'));
});

gulp.task('dev', ['sass', 'copy-images'], () => {
  gulp.watch('src/styles/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'copy', 'copy-images']);