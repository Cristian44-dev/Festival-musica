let gulp=require('gulp');
let imagemin = require('gulp-imagemin');
let sass=require('gulp-sass')(require ('sass'));
let colors=require('colors');
let notify=require('gulp-notify');
let webp=require('gulp-webp');
let concat=require('gulp-concat');

const path={
    imagenes:"./src/img/**/*",
    scss:"./src/scss/app.scss",
    destcss:"./css",
    destimg:"./src/build/img",
    js:'./js/**/*'
}

function css(){
    return gulp.src(path.scss)
    .pipe(sass({outputStyle:'expanded'}))
    .pipe(gulp.dest(path.destcss))
}

function minCss(){
    return gulp.src(path.scss)
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(gulp.dest(path.destcss))
    .pipe(notify(()=> console.log(colors.blue.bold("Css mificado"))))
}

function watchCss(){
    return gulp.watch('./src/scss/**/*.scss',css);
}

function minImage(){
    return gulp.src(path.imagenes)
    .pipe(imagemin())
    .pipe(gulp.dest(path.destimg))
    .pipe(notify(()=> console.log(colors.blue.bold("Imagen minificada con exito"))))
}

function webP(){
    return gulp.src(path.imagenes)
    .pipe(webp())
    .pipe(gulp.dest(path.destimg))
    .pipe(notify(()=> console.log(colors.blue.bold("Imagen convertida con exito"))))
}

function javascript(){
    return gulp.src(path.js)
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./src/build/js')) 
}

exports.javascript=javascript
exports.webP=webP;
exports.minImage=minImage;
exports.css=css;
exports.minCss=minCss;
exports.watchCss=watchCss;
