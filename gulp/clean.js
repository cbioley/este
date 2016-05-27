import del from 'del';
import gulp from 'gulp';

gulp.task('clean', done => {
  del('build/*');
  done();
});
