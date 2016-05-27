import eslint from 'gulp-eslint';
import gulp from 'gulp';
import runEslint from './support/run-eslint.js';

gulp.task('eslint-ci', done => {
  runEslint().pipe(eslint.failAfterError());
  done();
});
