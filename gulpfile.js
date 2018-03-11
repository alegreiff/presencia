//INCLUYE LOS MÓDULOS NECESARIOS
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass= require('gulp-sass');
//Configurar Browser SYNC
gulp.task('browser-sync', function(){
    var files = [
        './style.css',
        './*.php'
    ];
    //INICIALIZAR Browser SYNC en un servidor PHP
    browserSync.init(files, {
        proxy: "presencia.test",
        notify: false,
        port: 2001

    });
});

//Configurar la tarea SASS que corre en cambios de archivos .scss
gulp.task('sass', function(){
    return gulp.src('sass/*.scss')
        .pipe(sass({
            'outputStyle':'expanded'
            //'outputStyle':'compressed'

        }))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});
//CREAR la tarea por defecto llamada gulp
gulp.task('default', ['sass', 'browser-sync'], function(){
    gulp.watch("sass/**/*.scss", ['sass']);
})