var gulp = require('gulp'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps');

gulp.task('compileSass', function () {
    gulp.src('src/scss/styles.scss')
        .pipe(maps.init())
        .pipe(sass().on('error', sass.logError()))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('src/css/'));
});
gulp.task('watch', function () {
    gulp.watch('src/scss/styles.scss', ['compileSass']);
});
gulp.task('default', ['build']);