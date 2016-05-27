import bg from 'gulp-bg';
import gulp from 'gulp';

gulp.task('server-node', gulp.series(bg('node', './src/server')));
