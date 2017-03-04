var scss = "./development/css/stylesheet.scss";
var js  = "./development/js/*.js";
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require("gulp-concat");
var cssmin = require('gulp-cssmin');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('sass', function () {
    return gulp.src(scss)
    .pipe( sass.sync().on('error', sass.logError) )
    .pipe( concat('stylesheet.min.css') )
    .pipe( postcss([ autoprefixer({browsers: "> 5%, last 5 firefox versions, last 5 chrome versions, last 5 safari versions, last 5 edge versions, ie 11, ie 7, ie 8, ie 9"}) ]) )
    .pipe( cssmin() )
    .pipe( gulp.dest('./assets/css/') )
});

gulp.task('minify-js', function () {
    gulp.src(js)
    .pipe(concat('script.min.js'))
    .pipe(gulp.dest('./assets/js/'));
});

gulp.task('watch', function() {
    gulp.watch(scss, ['sass']);
    gulp.watch(js, ['minify-js']);
});