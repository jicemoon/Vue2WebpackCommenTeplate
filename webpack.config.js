var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
var CopyWebpackPlugin = require('copy-webpack-plugin'); //复制静态文件到
var ExtractTextPlugin = require("extract-text-webpack-plugin"); //将css单独提取出来
var config = {
    entry: ["./entry.js", hotMiddlewareScript],
    output: {
        path: "./dist",
        filename: 'build.[hash:15].js'
    },
    externals: {
        Vue: true,
        $: true
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [{
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("styles.[hash:15].css"),
        new CopyWebpackPlugin([
            { from: 'static' },
            { from: 'src/Views', to: "Views" }
        ]),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
};
module.exports = config;