const webpack = require('webpack');
const baseConfig = require('./webpack.common.config');


const config= {
   ...baseConfig,
   // Enable sourcemaps for debugging webpack's output.
   devtool: "source-map",
   mode:'development',
   devServer: {
    // historyApiFallback: {
    //     index: '/index.development.html'
    // },
    port: process.env.PORT || 3001,
    host:'127.0.0.1',
    hot: true,
    inline:true,
    overlay: true,
    publicPath:'/',
    // proxy: [
    //         {
    //             // TODO: Remove the / path. This is currently blocked by login redirect url going to /, and that request needs to be handled by the server, not client side.
    //             context: ['/', '/login', '/logout', '/api'],
    //             target: 'https://127.0.0.1:3000',
    //             secure: false
    //         }
    //     ]
        proxy: { 
            "/api/**": {
                target: 'http://127.0.0.1:10010', 
                secure: false,
                changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
            }  
        },
    },
    plugins:[
        ...baseConfig.plugins,
        new webpack.HotModuleReplacementPlugin()
    ]
}


 
module.exports = config;

