import gulp from 'gulp';
import runEslint from './support/run-eslint.js';

gulp.task('eslint', gulp.series(runEslint));
