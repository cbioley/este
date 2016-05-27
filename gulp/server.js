import args from './support/args';
import gulp from 'gulp';

gulp.task('server', done => {
  const tasks = args.production ?
    gulp.series('clean', 'build', 'server-node') :
    gulp.parallel('server-hot', 'server-nodemon');
  gulp.series('env', tasks)(done);
});
