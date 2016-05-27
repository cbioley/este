import gulp from 'gulp';

gulp.task('test', gulp.series('eslint-ci', 'mocha', 'build-webpack'));
