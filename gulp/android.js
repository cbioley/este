import bg from 'gulp-bg';
import gulp from 'gulp';

gulp.task('android', gulp.series('native', bg('react-native', 'run-android')));
