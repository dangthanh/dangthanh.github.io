import gulp from 'gulp'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import browserify from 'browserify'
import watchify from 'watchify'
import babelify from 'babelify'
import uglify from 'gulp-uglify'
import del from 'del'
import hash from 'gulp-hash'

const dirs = {
  entry: './src/js/app.js',
  dist: './static/assets/js/'
}

function compile (watch) {
  let bundlerConfig = {
    entries: dirs.entry,
    debug: true
  }

  let bundler = watchify(
                  browserify(bundlerConfig)
                  .transform(babelify, {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                  })
                )

  function rebundle () {
    bundler.bundle()
          .pipe(source('app.js'))
          .pipe(buffer())
          .pipe(uglify())
          .pipe(hash())
          .pipe(gulp.dest(dirs.dist))
          .pipe(hash.manifest('hash.json'))
          .pipe(gulp.dest('./data/js'))
  }

  if (watch) {
    bundler.on('update', () => {
      console.log('-> Bunding....')
      rebundle()
    })
  }

  rebundle()
}

gulp.task('scripts', () => {
  del(`${dirs.dist}/**/*`)
  return compile(true)
})
