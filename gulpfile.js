var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    useref = require('gulp-useref'),
    cssnano = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    connect = require('gulp-connect');

gulp.task('default', ['watch', 'connect']);

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/css/main.css', ['css']);
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
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});



//useref
gulp.task('useref', function(){
 return gulp.src('dist/*.html')
   .pipe(useref())
   .pipe(gulp.dest('dist'))
});

gulp.task('default', () =>
    gulp.src('app/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 1 version']}),
        cssnano(),
    ];
    return gulp.src('.app/css/main.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist/css/main.min.css'));
});
