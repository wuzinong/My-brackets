const webpack = require('webpack');
const baseConfig = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const srcPath = subdir => path.resolve(__dirname, './ClientApp/', subdir);

const config = {
    ...baseConfig,
    mode:'production',
    devtool:false,
    output: {
        ...baseConfig.output,
        path: path.resolve(__dirname, './wwwroot')
        // path: path.resolve(__dirname, '../dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    // test: /[\\/]node_modules[\\/]/,
                    test: path.resolve(__dirname, 'node_modules'),
                    name: "vendors",
                    priority: -10,
                    //chunks:"initial",
                    enforce: true
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins:[
       ...baseConfig.plugins,
       new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
        }),
        new HtmlWebpackPlugin({
            template:srcPath('./index.html'),
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
        })
        // new ExtractTextPlugin({
        //     filename: 'bundle.css',
        //     disable: false,
        //     allChunks: true
        // })
    ]
}

module.exports = config;

