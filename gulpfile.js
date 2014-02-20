var gulp = require('gulp');
var gutil = require('gulp-util');
var spritesmith = require('gulp.spritesmith');



gulp.task('sprites', function () {
  var spriteData = gulp.src('slice/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    	engine : 'gm'
  }));
  spriteData.img.pipe(gulp.dest('./dist/img/'));
  spriteData.css.pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', ['sprites'], function(){
  // place code for your default task here
});