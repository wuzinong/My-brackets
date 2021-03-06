const webpack = require('webpack');
const baseConfig = require('./webpack.common.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
    ...baseConfig,
    mode:'production',
    devtool:false,
    plugins:[
       ...baseConfig.plugins,
       new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
        }),
        new HtmlWebpackPlugin({
            template:'./index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            filename:'index.html',
            inject:'body'
        }),
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        })
    ]
}

module.exports = config;

