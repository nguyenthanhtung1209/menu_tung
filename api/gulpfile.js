'use strict';
var gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('bundle', function() {
    gulp.src('public/js/*.js')
    .pipe(minify())
    .pipe(gulp.dest('public/dist'));
  });