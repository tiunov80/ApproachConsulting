var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concatCss = require('gulp-concat-css'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat');

gulp.task('sass', function () {
    gulp.src('assets/stylesheets/*.+(scss|sass)')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/stylesheets/styles'));
});

gulp.task('mincss', function () {
    return gulp.src('assets/stylesheets/styles/*.css')
        .pipe(concatCss("main.min.css"))
        .pipe(cssnano())
        .pipe(gulp.dest('css'));
});

gulp.task('scripts', function () {
    return gulp.src(['assets/javascripts/lib/jquery.js', 'assets/javascripts/lib/wow.min.js', 'assets/javascripts/lib/jquery.singlePageNav.min.js'])
        .pipe(concat('lib.min.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('watch', function () {
    gulp.watch('assets/stylesheets/**/*.+(scss|sass)', ['sass']);
    gulp.watch('assets/stylesheets/styles/*.css', ['mincss']);
    gulp.watch('assets/javascript/lib/*.js', ['scripts']);
});

gulp.task('default', ['sass', 'mincss','scripts', 'watch']);
