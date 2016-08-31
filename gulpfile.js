var gulp = require('gulp'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber');

gulp.task('compileSass', function () {
    return gulp.src('src/scss/styles.scss')
        .pipe(plumber())
        .pipe(maps.init())
        .pipe(sass())
        .pipe(maps.write('./'))
        .pipe(gulp.dest('src/css/'));
});
gulp.task('watch', function () {
    gulp.watch('src/scss/styles.scss', ['compileSass']);
});
//gulp.task('default', ['build']);