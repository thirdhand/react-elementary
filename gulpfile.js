const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const ts = require('gulp-typescript')
const merge = require('merge2')

const tsProject = ts.createProject('tsconfig.json')

gulp.task('default', () => {
  const tsResult = tsProject
    .src()
    .pipe(sourcemaps.init())
    .pipe(tsProject())
  return merge([tsResult.dts, tsResult.js.pipe(sourcemaps.write('.'))]).pipe(
    gulp.dest('lib'),
  )
})
