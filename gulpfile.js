const gulp=require('gulp');
const sass=require('gulp-sass')(require ('sass'));
const sourcemap=require('gulp-sourcemaps');
const postcss=require('gulp-postcss');
const rename=require ('gulp-rename');
const concat=require ('gulp-concat');
const terser= require ('gulp-terser-js');
const webp=require('gulp-webp');
const colors=require('colors');
const notify=require('gulp-notify');

function css(){
    return gulp.src('./src/scss/app.scss')
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(sourcemap.write('./')) //crea el archivo en la misma ruta 
    .pipe(gulp.dest('./build/css'))
}

function minCss(){
    return gulp.src('./build/css/app.css')
    .pipe(sourcemap.init())
    .pipe(postcss([require('autoprefixer'),require('cssnano')]))
    .pipe(rename('app.min.css'))
    .pipe(sourcemap.write('./'))
    .pipe(gulp.dest('./build/css'))
}

function javascript(){
    return gulp.src('./src/js/**.js')
    .pipe(sourcemap.init())
    .pipe(concat('bundle.js'))
    .pipe(sourcemap.write('./'))
    .pipe(gulp.dest('./build/js'))
}

function minJavascript(){
    return gulp.src('./src/js/**.js')
    .pipe(sourcemap.init())
    .pipe(concat('bundle.js'))
    .pipe(terser())
    .pipe(rename('bundle.min.js'))
    .pipe(sourcemap.write('./'))
    .pipe(gulp.dest('./build/js'))
}

function webP(){
    return gulp.src('./src/img/**/*')
    .pipe(webp())
    .pipe(gulp.dest('./build/img'))
    .pipe(notify(()=> console.log(colors.blue.bold("Imagen convertida con exito"))))
}



function watch(){
    gulp.watch('./src/scss/**/*.scss',css);
    gulp.watch('./src/scss/**/*.scss',minCss);
    gulp.watch('./src/js/*.js',javascript);
    gulp.watch('./src/js/*.js',minJavascript);
}



exports.css=css;
exports.minCss=minCss;
exports.javascript=javascript;
exports.minJavascript=minJavascript;
exports.webP=webP;
exports.watch=watch;
exports.default=gulp.series(webP,css,javascript);