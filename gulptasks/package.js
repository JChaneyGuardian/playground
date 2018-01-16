var gulp    = require("gulp");
var webpack = require("webpack");
var gutil = require("gulp-util");
var path = require("path");
var html_webpack_plugin = require("html-webpack-plugin");

gulp.task("package", ["build", "clean:public"], (done) => {
     
    
    //https://webpack.js.org/configuration/?_sm_au_=iVVJQ3P3MBtqrMFl
    webpack({
        cache: true,
        entry: "./dist/index.js",
        output : {
            path: path.join(__dirname, "../dist"),
            filename: "../public/bundle[hash].js",
            libraryTarget:"umd",
            library:"$playground"
        },
        resolve: {
            extensions: ['.js']
        },
        plugins :[
            new html_webpack_plugin({
                // https://github.com/jantimon/html-webpack-plugin
                template:"./src/index.html",
                filename:"../public/index.html",
                inject:false,
            })
        ],
        module: {
        }
    },
    (err, stats) => {
        if (err) {
            throw new gutil.PlugginError("package", err);
        }
        console.log(stats.toString({
            colors:true,
        }));

        done();
    })

});
//"webpack"
// var replace = require("gulp-replace");
// gulp.task("copyhtml", [], (done) => {
//     gulp.src('./src/*.html')
//         .pipe(replace(/bundle.js/g, './bundle.js'))
//         .pipe(gulp.dest("./public"));
//     done();
// });


// gulp.task("package", ["copyhtml"], (done) => {
//     done();
// });