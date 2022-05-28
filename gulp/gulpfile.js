// МОДУЛИ
const {src, dest, watch} = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));

//ВЕБСЕРВЕР, ЛАЙВРЕЛОАДЕР
function runServe() {
  browserSync.init({
    server: './src'
  });
  watch("src/**/*.scss", styleCompile);
  watch("src/**/*.js", browserSync.reload);
  watch("src/*.js").on('change', browserSync.stream());
  watch("src/*.html").on('change', browserSync.reload);
}

//SCC
//СБОРКА МОДУЛЕЙ И ПОДКЛЮЧЕНИЕ К ГЛАВНОМУ ФАЙЛУ
function styleCompile() {
  return src('src/assets/styles/**/*.scss')
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(dest('src/assets/styles'))
    .pipe(browserSync.stream());
}
exports.styleCompile = styleCompile;
exports.runServe = runServe;
