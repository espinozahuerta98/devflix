const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const { watch } = require('gulp');

function css() {
    return gulp
        .src('scss/app.scss')
        .pipe(autoprefixer())
        .pipe(sass({ outputStyle: 'expanded' })) //nested, compact, expanded, compressed
        .pipe(gulp.dest('css'))
}

function watchArchivos() {
    gulp.watch('scss/*.scss', css);
    gulp.watch('../index.html');

}

//tareas
gulp.task('css', css);
gulp.task('watch', gulp.parallel(watchArchivos))