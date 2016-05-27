import gulp from 'gulp';
import hub from 'gulp-hub';

const tasks = [
  'env',
  'mocha',
  'build-webpack',
  'build',
  'messages-extract',
  'messages-check',
  'bare',
  'clean',
  'eslint',
  'eslint-ci',
  'to-html',
  'mocha-file',
  'mocha-watch',
  'test',
  'server-nodemon',
  'server-node',
  'server-hot',
  'server',
  'fix-native-babelrc-files',
  'fix-react-native',
  'native',
  'upgrade-react-native',
  'ios',
  'android',
  'favicon-generate',
  'favicon-inject',
  'favicon',
  'deploy-firebase-database',
  'deploy-firebase',
  'deploy-heroku-git',
  'deploy-heroku',
];
hub(tasks.map(task => `./gulp/${task}.js`));

// Default task to start development. Just type `gulp`.
gulp.task('default', gulp.series('server'));
