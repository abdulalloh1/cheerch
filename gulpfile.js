'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
    return gulp.src(['dist/sass/style.scss'])
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream())
});

gulp.task('default', function () {
    browserSync.init({
        server: "./dist"
    });
    gulp.watch('dist/sass/**/*.scss', gulp.parallel('sass'));
    gulp.watch("dist/*.html").on('change', browserSync.reload);
});