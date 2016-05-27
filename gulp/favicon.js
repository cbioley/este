import gulp from 'gulp';

gulp.task('favicon', gulp.series('favicon-generate', 'favicon-inject'));
