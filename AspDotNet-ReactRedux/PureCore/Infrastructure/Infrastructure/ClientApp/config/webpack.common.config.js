const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry:{
        vendor:['react','react-dom','react-router'],
        polyfill:[ "babel-polyfill"],
        app:["./src/index.tsx"]
    },
    output: {
        filename:"[name].bundle.js",
        path: __dirname + "/dist",
        chunkFilename: '[name].js'
        // chunkFilename: '[name].[chunkhash:5].js'
    },



    resolve: {
        alias: {
			Common: srcPath('components/Common'),
			consts: srcPath('consts.js'),
			styles: srcPath('styles'),
			store: srcPath('store'),
			utils: srcPath('utils'),

			csstheme: themePath.lightTheme
		},
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx",".jsx", ".js", ".json"]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html',
            inject:'body',
            chunks: ["polyfill","app","vendor"],
            chunksSortMode: "manual"
        }),
        new ExtractTextPlugin({
            filename: '[name].bundle.css',
            disable: false,
            allChunks: true
        })
    ],
    optimization:{
        splitChunks:{
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
                test:path.resolve(__dirname,'node_modules'),
                name:"vendors",
                priority: -10,
                //chunks:"initial",
                enforce:true
              },
              default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
              }
            }
        }
    },
    module: {
        rules: [
            {
				test: /\.(js|jsx|ts|tsx)?$/,
				loaders: [   
                    'ts-loader'
                ],
				exclude: /node_modules/
			},
            // {
            //     test:/.scss$/,
            //     use:[
            //         "style-loader",//inline style tag
            //         {
            //           loader:"css-loader",
            //           options:{
            //               minimize:true,
            //               modules: true, //enable css modules
            //               importLoaders: 2
            //           }
            //         },
            //         "postcss-loader",
            //         "sass-loader"
            //     ]
            //   }
              {
                test:/.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader', 
                        'postcss-loader',
                        'sass-loader'
                    ]
                  })
               }
              ,{
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
             },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            //{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }
};
