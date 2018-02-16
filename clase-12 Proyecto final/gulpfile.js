var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('sass',function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true /*de false lo pasamos a true para que quede bien bonito*/
        }))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});
gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });
    //
    gulp.watch("./scss/**/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./js/*.js").on('change', browserSync.reload);
    /*en la raiz del proyecto busque todos los archivos html y recargalos*/

});