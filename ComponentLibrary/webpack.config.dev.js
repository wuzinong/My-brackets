const webpack = require('webpack');
const baseConfig = require('./webpack.config');
const path = require('path');
const srcPath = subdir => path.resolve(__dirname, './ClientApp/', subdir);
const CopyWebpackPlugin = require('copy-webpack-plugin');
const env = process.env.NODE_ENV;

const config = {
    ...baseConfig,
    // Enable sourcemaps for debugging webpack's output.
    entry:{
        //polyfill: ["babel-polyfill"],
        global: [srcPath(`config/appsettings.${env}.ts`)],
        app: [
            srcPath("src/index.tsx")
        ]
    },
    devtool: "source-map",
    mode: 'development',
    module: {
        rules: [
            ...baseConfig.module.rules,
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        ...baseConfig.plugins,
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'public/vendor'),
                to: path.resolve(__dirname, './wwwroot')
            }
        ]),
        new webpack.DllReferencePlugin({
            manifest: require('./public/vendor/vendors.manifest.json')
        })
    ]
};

module.exports = config;