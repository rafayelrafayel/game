var gulp = require('gulp'),
        path = require('path'),
        Builder = require('systemjs-builder'),
        ts = require('gulp-typescript'),
        concat = require('gulp-concat'),
        uglify = require('gulp-uglify');
        sourcemaps = require('gulp-sourcemaps'),
        cleanCSS = require('gulp-clean-css');

var tsProject = ts.createProject('tsconfig.json');

var appDev = 'app'; // where your ts files are, whatever the folder structure in this folder, it will be recreated in the below 'dist/app' folder
var appProd = 'dist/app';

/** first transpile your ts files */
gulp.task('ts', function () {
    return gulp.src(appDev + '/**/*.ts')
            .pipe(sourcemaps.init({
                loadMaps: true
            }))
            .pipe(ts(tsProject))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(appProd));
});

/** then bundle */
gulp.task('bundle', ['ts'],function () {
    // optional constructor options
    // sets the baseURL and loads the configuration file
    var builder = new Builder('', 'systemjs.config.js');

    /*
     the parameters of the below buildStatic() method are:
     - your transcompiled application boot file (the one wich would contain the bootstrap(MyApp, [PROVIDERS]) function - in my case 'dist/app/boot.js'
     - the output (file into which it would output the bundled code)
     - options {}
     */
    return builder
            .buildStatic(appProd + '/main.js', appProd + '/bundle.js', {minify: true, sourceMaps: true})
            .then(function () {
                console.log('Build complete');
            })
            .catch(function (err) {
                console.log('Build error');
                console.log(err);
            });
});

/*gulp.task('minify-css', function () {
    return gulp.src([
        "./bower_components/bootstrap/dist/css/bootstrap.min.css",
        "./fonts/font-awesome-4.6.3/css/font-awesome.min.css",
        "./css/lottery.css",
        "./css/jackpot.css",
        "./css/menu.css",
        "./css/spin.css",
        "./css/tresure.css",
        "./css/styles.css"
    ]).pipe(concat('all.min.css'))
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest('dist'));
});*/

gulp.task('minify-js', function() {
  gulp.src(
          ['./node_modules/core-js/client/shim.js', 
           './node_modules/zone.js/dist/zone.js',
           './node_modules/reflect-metadata/Reflect.js',
           './node_modules/systemjs/dist/system.src.js',
           
  ]
          )
    //.pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/lib'));
});


/** this runs the above in order. uses gulp4 */
gulp.task('build', ['ts','bundle']);//gulp.series(['ts', 'bundle']), 'bundle'
gulp.task('default', ['build']);//gulp.task('build')