import gulp from 'gulp';

gulp.task('deploy-heroku', gulp.series('deploy-heroku-git', 'deploy-firebase-database'));
