/**
 * Created by roger on 10/11/15.
 */

var gulp = require('gulp');
var browserify = require('glup-browserify');
var rename = require('gulp-rename');

gulp.task('js', function(){
    gulp.src ('public/js/main.js')
        .pipe(browserify())
        .pipe(rename('public/js/bundle.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
    gulp.watch('public/js/**/*.js')
});

