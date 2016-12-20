import gulp from 'gulp'

const dirs = {
  css: './src/css/**/*.css',
  js: './src/js/**/*.js'
}

gulp.task('watch', () => {
  gulp.watch(dirs.css, ['styles'])
  gulp.watch(dirs.js, ['scripts'])
})
