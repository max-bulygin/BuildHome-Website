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

gulp.task('pluginFix', function () {
    gulp.src('src/js/plugins/slick/fonts/*.*')
        .pipe(gulp.dest('src/css/fonts'));
});

gulp.task('pluginFix2', function () {
    gulp.src('src/js/plugins/slick/*.gif')
        .pipe(gulp.dest('src/css'));
});

gulp.task('default', ['compileSass']);

gulp.task('build', ['compileSass', 'pluginFix', 'pluginFix2']);
