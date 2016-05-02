var gulp = require('gulp'),
  connect = require('gulp-connect'),
  DEST = "client",
  config = {
    root: [DEST],
    host: 'localhost',
    port: 5000
  };

gulp.task('default', function(){
  connect.server(config);
});