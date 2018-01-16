var gulp    = require("gulp");
var webpack = require("webpack");
var gutil = require("gulp-util");
var path = require("path");

gulp.task("package", ["build"], (done) => {
     
    
    //https://webpack.js.org/configuration/?_sm_au_=iVVJQ3P3MBtqrMFl
    webpack({
        cache: true,
        entry: "./dist/index.js",
        output : {
            path: path.join(__dirname, "../dist"),
            filename: "../public/bundle.js",
            libraryTarget:"umd",
            library:"$playground"
        },
        resolve: {
            extensions: ['.js']
        },
        plugins :[
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