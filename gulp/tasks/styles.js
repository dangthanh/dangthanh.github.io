import gulp from 'gulp'
import postcss from 'gulp-postcss'
import cssnext from 'postcss-cssnext'
import atImport from 'postcss-import'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'

const dirs = {
  entry: './src/css/app.css',
  dist: './static/assets/css'
}

gulp.task('styles', () => {
  let processors = [
    cssnext({
      warnForDuplicates: false
    }),
    atImport(),
    autoprefixer({ browsers: ['last 2 version'] }),
    cssnano()
  ]

  return gulp.src(dirs.entry)
            .pipe(postcss(processors))
            .pipe(gulp.dest(dirs.dist))
})
