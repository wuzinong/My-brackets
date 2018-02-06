const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool:false,
    entry:[
        './src/index.js'
    ],
    output:{
        path:path.join(__dirname,'/dist/'),
        filename:"bundle.js",
        chunkFilename: '[name]-[hash:5].chunk.js',
        publicPath:'./'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html',
            inject:'body'
        })
    ],
    module:{
        rules:[{
            test:/\.(js|jsx)$/,
            include:/src/,
            use:[
                "babel-loader"
            ]
          }
        ],
    }
};