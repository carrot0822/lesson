var gulp = require('gulp');
var rev = require('gulp-rev');//给每个文件根据哈希值计算并添加版本号
var revReplace = require('gulp-rev-replace');//把index里的引用更新替换
var useref = require('gulp-useref');//根据设置的注释内容来操作
var filter = require('gulp-filter');//筛选文件 经过处理后再放回去
var uglify = require('gulp-uglify');//压缩js的文件
var csso = require('gulp-csso');//压缩css文件

gulp.task('default',function(){
  var jsFilter = filter('**/*.js',{restore:true});
  var cssFilter = filter('**/*.css',{restore:true});
  var indexHtmlFilter = filter(['**/*','!**/index.html'],{restore:true});
  //感叹号排除首页  不给首页打版本号
  return gulp.src('src/index.html')//需要处理的文件拿过来当引入
        .pipe(useref())//分析注释内容进行相应的操作 分析哪些需要流入 此处是拿了所有的css和js
        .pipe(jsFilter) //筛选JS文件
        .pipe(uglify())//压缩js文件
        .pipe(jsFilter.restore)//处理结束后丢回流
        .pipe(cssFilter) //获取css文件流
        .pipe(csso()) //压缩csss
        .pipe(cssFilter.restore) //继续放回水流
        .pipe(indexHtmlFilter) //获取html
        .pipe(rev()) //添加版本号
        .pipe(indexHtmlFilter.restore) //添加结束 放回流
        .pipe(revReplace()) //根据流中的提示进行文件替换
        .pipe(gulp.dest('dist')); //放入已知文件夹
})