const webpack = require('webpack');
const config = require('./webpack.common.config');

config.mode='development';
config.devServer = {
    hot:true,
    port:'3001',
    host:'127.0.0.1',
    inline:true,
    publicPath:'/',
    proxy: { 
        "/api/**": {
             target: 'http://127.0.0.1:10010', secure: false 
            }  
    }
} 
config.plugins.push(new webpack.HotModuleReplacementPlugin());
module.exports = config;

