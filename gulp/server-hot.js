import bg from 'gulp-bg';
import gulp from 'gulp';

gulp.task('server-hot', gulp.series(bg('node', './webpack/server')));
