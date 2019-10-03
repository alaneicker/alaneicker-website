const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp
    .src('styles/app.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('public/styles')); 
});

gulp.task('default', ['sass'], () => {
  gulp.watch('styles/**/*.scss', ['sass']);
});