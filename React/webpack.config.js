const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool:"cheap-module-eval-source-map",
    entry:[
        'webpack-dev-server/client?http://127.0.0.1:3000',
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    output:{
        path:path.join(__dirname,'/dist/'),
        filename:"bundle.js",
        chunkFilename: '[name]-[hash:5].chunk.js',
        publicPath: "./",
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html',
            inject:'body'
        })
    ],
    module:{
        rules:[{
            test:/\.jsx?$/,
            include:/src/,
            use:[
               {
               loader:"babel-loader"
             }
            ]
          },{
            test:/.scss$/,
            use:[
                "style-loader",
                {
                  loader:"css-loader",
                  options:{
                      minimize:true
                  }
                },
                "postcss-loader",
                "sass-loader"
            ]
          },{
			test: /\.(jpe?g|png|gif|svg)$/i,
			include: /src/,
			use: [
                {
                    loader:'url-loader',
                    options:{
                        limit:1024,
                        name:'[name].[ext]'
                    }
                }
			]
		 }
        ]
    },
    resolve:{
        extensions:['.js','.jsx','.json'],
        //modules:['node_modules'],
        // alias:{
        //     'my-libs':resolve(__dirname,'./src/libs/lib.js')
        // }
    }
};
