//var elixir = require('laravel-elixir');
//
///*
// |--------------------------------------------------------------------------
// | Elixir Asset Management
// |--------------------------------------------------------------------------
// |
// | Elixir provides a clean, fluent API for defining some basic Gulp tasks
// | for your Laravel application. By default, we are compiling the Sass
// | file for our application, as well as publishing vendor resources.
// |
// */
//
//elixir(function(mix) {
//    mix.sass('app.scss');
//});

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

