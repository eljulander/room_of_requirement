var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    del = require('del');

//PATHS
var SCRIPTS_PATH = 'public/scripts/**/*.js',
    CSS_PATH = 'public/css/**/*.css',
    DIST_PATH = 'public/dist',
    SCSS_PATH = 'public/scss/**/*.scss';

//styles for scss
gulp.task('styles', function () {
    console.log("styles task");
    return gulp.src('public/scss/styles.scss')
        .pipe(plumber(function (err) {
            console.log("Styles Error " + err)
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_PATH))
        .pipe(livereload());
});

//Scripts
gulp.task('scripts', function() {
    console.log("scripts task");
    return gulp.src(['public/scripts/config.js', 'public/scripts/login.js', 'public/scripts/wand.js', 'public/scripts/main.js', SCRIPTS_PATH])
        .pipe(plumber(function(err) {
            console.log('Scripts Task Error ' + err);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_PATH))
        .pipe(livereload());
});

gulp.task('clean', function() {
    return del.sync([
        DIST_PATH
    ]);
});

//General tasks
gulp.task('default', ['clean', 'styles', 'scripts'], function () {
    console.log("default task.");
    return gulp.src('public/index.html')
        .pipe(livereload());
});

gulp.task('watch', ['default'], function() {
    console.log("watch task.");
    require('./server.js');
    livereload.listen();
    gulp.watch(SCRIPTS_PATH, ['scripts']);
    gulp.watch(SCSS_PATH, ['styles']);
})
