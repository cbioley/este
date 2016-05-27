import gulp from 'gulp';

// Various fixes for react-native issues.
gulp.task('fix-react-native', gulp.series('fix-native-babelrc-files'));
