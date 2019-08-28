const path = require('path');

const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const srcPath = subdir => path.resolve(__dirname, './ClientApp/', subdir);
const CopyWebpackPlugin = require('copy-webpack-plugin');

const env = process.env.NODE_ENV


module.exports = {
    entry: {
        //vendor: ['react', 'react-dom', 'react-router'],
        //polyfill: ["babel-polyfill"],
        global: [srcPath(`config/appsettings.${env}.ts`)],
        app: [srcPath("src/index.tsx")]
    },
    output: {
        publicPath: '/',
        filename: "[name].bundle.js",
        //path: __dirname + "/dist",
        path: __dirname + "/wwwroot",
        chunkFilename: '[name].js'
        // chunkFilename: '[name].[chunkhash:5].js'
    },

    resolve: {
        alias: {
            Components: srcPath('src/components'),
            Common: srcPath('src/components/Common'),
            Forms: srcPath('src/components/Forms'),
            consts: srcPath('src/consts.ts'),
            imgs: srcPath('src/assets/images'),
            styles: srcPath('src/assets/styles'),
            commonRedux: srcPath("src/redux"),
            store: srcPath('src/redux/store'),
            utils: srcPath('src/utils'),
            types: srcPath('src/types'),
            libs: srcPath('src/libs')
        },
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".jsx", ".js", ".json"]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].bundle.css',
            disable: false,
            allChunks: true
        }),
        new CopyWebpackPlugin([
            {
                from: srcPath("src/locales"),
                to: path.resolve(__dirname, './wwwroot/locales')
            }
        ])
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)?$/,
                loaders: [
                    'ts-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                })
            }
            , {
                test: /\.(jpe?g|png|gif|svg)$/i,
                include: /src/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'static/images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};
