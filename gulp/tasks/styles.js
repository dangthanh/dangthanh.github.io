import gulp from 'gulp'
import postcss from 'gulp-postcss'
import cssnext from 'postcss-cssnext'
import cssImport from 'postcss-import'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'
import del from 'del'
import hash from 'gulp-hash'

const dirs = {
  entry: './src/css/app.css',
  dist: './static/assets/css'
}

gulp.task('styles', () => {
  let processors = [
    cssImport(),
    autoprefixer({ browsers: ['last 1 version'] }),
    cssnano({
      discardComments: { removeAll: true }
    }),
    cssnext({
      warnForDuplicates: false
    })
  ]

  del(`${dirs.dist}/**/*`)

  return gulp.src(dirs.entry)
            .pipe(postcss(processors))
            .pipe(hash())
            .pipe(gulp.dest(dirs.dist))
            .pipe(hash.manifest('hash.json'))
            .pipe(gulp.dest('./data/css'))
})
