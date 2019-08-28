const webpack = require('webpack');
const baseConfig = require('./webpack.config');
const path = require('path');
const srcPath = subdir => path.resolve(__dirname, './ClientApp/', subdir);
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const env = process.env.NODE_ENV;
const config = {
    ...baseConfig,
    entry:{
        //polyfill: ["babel-polyfill"],
        global: [srcPath(`config/appsettings.${env}.ts`)],
        app: [
            "react-hot-loader/patch",
            srcPath("src/index.tsx")
        ]
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    mode: 'development',
    module: {
        rules: [
            ...baseConfig.module.rules,
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    devServer: {
        historyApiFallback: {
            index: srcPath('/index.html')
        },
        //contentBase: './',
        port: process.env.PORT || 3001,
        host: '127.0.0.1',
        hot: true,
        inline: true,
        overlay: true,
        publicPath: '/',
        // proxy: [
        //         {
        //             // TODO: Remove the / path. This is currently blocked by login redirect url going to /, and that request needs to be handled by the server, not client side.
        //             context: ['/', '/login', '/logout', '/api'],
        //             target: 'https://127.0.0.1:3000',
        //             secure: false
        //         }
        //     ]
        // proxy: {
        //     "/**": {
        //         target: 'https://localhost:44384/', //backend server
        //         secure: false,
        //         changeOrigin: true // ??????,??????????
        //     }
        // }
    },
    plugins: [
        ...baseConfig.plugins,
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'public/vendor'),
                to: path.resolve(__dirname, './wwwroot')
            }
        ]),
        new HtmlWebpackPlugin({
            template: srcPath('index.html'),
            //alwaysWriteToDisk: true,
            filename: 'index.html',
            inject: 'body',
            // chunks: ["global", "polyfill", "app", "vendor"],
            chunks: ["global", "polyfill", "app"],
            chunksSortMode: "manual"
        }),
        new webpack.HotModuleReplacementPlugin(),
         new webpack.DllReferencePlugin({
            manifest: require('./public/vendor/vendors.manifest.json')
        }),
        new AddAssetHtmlPlugin([
                    {
                        filepath: require.resolve(path.resolve(__dirname, 'public/vendor/vendors.js')),
                    }
        ])
        
  
    ]
};

module.exports = config;

