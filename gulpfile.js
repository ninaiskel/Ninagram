var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    cssnano = require('gulp-cssnano'),
<<<<<<< HEAD
<<<<<<< HEAD
=======
    sourcemaps = require('gulp-sourcemaps'),
>>>>>>> origin/gh-pages
=======
    sourcemaps = require('gulp-sourcemaps'),
>>>>>>> origin/gh-pages
    connect = require('gulp-connect');

gulp.task('default', ['watch','connect']);

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('css', function () {
    return gulp.src('app/**/*.css')
        .pipe( postcss([ require('precss'), require('autoprefixer') ]) )
        .pipe( gulp.dest('build/') );
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
});

// browserSync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})
// gulp conect
gulp.task('connect', function () {
    connect.server({
        root: 'dist',
        port: 8001,
        livereload: true
    });
});
<<<<<<< HEAD
<<<<<<< HEAD

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 1 version']}),
        cssnano(),
    ];
    return gulp.src('./app/css/main.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./app/css/main.min.css'));
});
=======
>>>>>>> origin/gh-pages
=======
>>>>>>> origin/gh-pages
