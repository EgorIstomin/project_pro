
var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require ('gulp-sass');
var pug = require('gulp-pug');

gulp.task('pug', function () {
return gulp.src('./pug/pages/*.pug')
.pipe(pug({
pretty:true
}))
.pipe(gulp.dest('./pug/layout'));
});

function css_style (done) {
  gulp.src('./scss/style.scss')
  .pipe(sass({
    errorLogToConsol: true
  }))
  .on('error', console.error.bind(console))
  .pipe(rename({suffix: '.min' }))
  .pipe(gulp.dest('./css/'));

done();
}
gulp.task(css_style);

//outputStyle: 'compressed'
