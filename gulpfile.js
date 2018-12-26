const gulp = require("gulp");
const optImages = require('gulp-imagemin');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const minify = require('gulp-babel-minify');

sass.compiler = require('node-sass');

// Optimize images
gulp.task('optimize', () => {
    gulp.src('src/images/*')
        .pipe(optImages())
        .pipe(gulp.dest('dist/images/'));
});

// Compile SCSS to CSS
gulp.task('compileSCSS', () => {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'));
});

// Convert ES6+ code to ES5 using Babel and minify it
gulp.task('convertJS', () => {
    gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
       .pipe(minify({
           mangle: {
               keepClassName: true
           }
       }))
       .pipe(gulp.dest('./dist/js/'))
})

// Watch "compileSCSS" & "convertJS"
gulp.task('watch', () => {
    gulp.watch('./src/js/*.js', gulp.series('convertJS'));
    gulp.watch('./src/scss/*.scss', gulp.series('compileSCSS'));
})
