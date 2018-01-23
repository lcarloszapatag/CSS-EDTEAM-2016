//Importar los modulos y plugins que se usaran. Cada uno se importa con require('modulo')
var gulp =require('gulp'); /*gulp*/
var sass =require('gulp-sass'); /*para compilar sass*/
var browserSync = require('browser-sync').create(); /*para que recargue el navegador automaticamente*/
const autoprefixer = require('gulp-autoprefixer'); /*para los prefijos webkit etc.-*/

//Crear tarea se usa task
gulp.task('sass', function () {
    return gulp.src('./scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true /*de false lo pasamos a true para que quede bien bonito*/
        }))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});
    /*nombre de la tarea serve -> al iniciar pondriamos gulp serve  | con default solo gulp*/
gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });
    //
    gulp.watch("./scss/style.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
    /*en la raiz del proyecto busque todos los archivos html y recargalos*/

});