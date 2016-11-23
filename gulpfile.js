var gulp = require('gulp'),
$ = require('gulp-load-plugins')({ camelize: true }),
runSequence = require('run-sequence')

// gulp.task('css', function() {
//   return gulp.src('app/styles/main.scss')
//   .pipe($.sourcemaps.init())
//   .pipe($.sass().on('error', $.sass.logError))
//   .pipe($.autoprefixer({
//     browsers: ['last 2 versions'],
//     cascade: false
//   }))
//   .pipe($.sourcemaps.write())
//   .pipe(gulp.dest('./dist'))
// })

// gulp.task('css:watch', function() {
//   gulp.watch('app/styles/**/*.scss', ['css'])
// })

// gulp.task('moveAssets', function() {
//   return gulp.src('./app/assets/**/*')
//   .pipe(gulp.dest('./dist/assets'))
// })

// gulp.task('nodeAssets', function() {
//   gulp.src('./node_modules/jquery-slimscroll/**/*')
//   .pipe(gulp.dest('./dist/assets/jquery-slimscroll'));

//   gulp.src('./node_modules/jquery-mousewheel/**/*')
//   .pipe(gulp.dest('./dist/assets/jquery-mousewheel'));

//   gulp.src('./node_modules/jquery-mobile/**/*')
//   .pipe(gulp.dest('./dist/assets/jquery-mobile'));
// })

// gulp.task('bootstrapAssets', function() {
//   return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
//   .pipe(gulp.dest('./dist/assets'))
// })

// gulp.task('build:revAssets', ['css', 'moveAssets', 'nodeAssets', 'bootstrapAssets'], function() {
//   var rev = new $.revAll()
//   return gulp.src('./dist/**/*')
//   .pipe(rev.revision())
//   //.pipe(gulp.dest('./dist/public'))
//   .pipe(rev.manifestFile())
//   .pipe(gulp.dest('./dist'))
// })

// gulp.task('build:cpServer', function() {
//   return gulp.src('./src/**/*.{js,ejs}')
//   .pipe(gulp.dest('./dist/server-build'))
// })
// gulp.task('build:revServer', ['build:cpServer'], function() {
//   var manifest = gulp.src('./dist/rev-manifest.json')
//   return gulp.src('./dist/server-build/{components,containers}/**/*')
//   .pipe($.revReplace({ manifest: manifest }))
//   .pipe(gulp.dest('./dist/server-build'))
// })

gulp.task('build', function() {
  //runSequence('build:revAssets')
  // runSequence('css', 'moveAssets')
})
