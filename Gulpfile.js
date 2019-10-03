const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp
    .src('src/styles/app.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('public/styles')); 
});

gulp.task('dev', ['sass'], () => {
  gulp.watch('src/styles/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);