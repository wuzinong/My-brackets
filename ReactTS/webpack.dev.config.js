const webpack = require('webpack');
const config = require('./webpack.common.config');

config.devServer = {
    hot:true,
    port:'3000',
    host:'0.0.0.0',
    inline:true,
    publicPath:'/',
    proxy: { "/api/**": { target: 'http://127.0.0.1:10010', secure: false }  }
} 
config.plugins.push(new webpack.HotModuleReplacementPlugin());
module.exports = config;

