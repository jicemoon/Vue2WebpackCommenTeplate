var webpack = require("webpack");
var CleanWebpackPlugin = require('clean-webpack-plugin'); //清除
var config = require("./webpack.config");
config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            //supresses warnings, usually from module minification
            warnings: false
        }
    }),
    new CleanWebpackPlugin(["dist"])
);
module.exports = config;