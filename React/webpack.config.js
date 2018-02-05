const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool:'cheap-module-eval-source-map',
    entry:[
        './src/index.js'
    ],
    output:{
        path:path.resolve(__dirname,'/dist/'),
        filename:"bundle.js",
        publicPath:'/'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'index.html',
            filename:'./index.html',
            inject:true
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