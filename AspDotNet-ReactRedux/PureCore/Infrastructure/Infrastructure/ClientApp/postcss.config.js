module.exports = {
    loader: 'postcss-loader',
    plugins: [
      require('autoprefixer')({
        browsers:['last 2 versions']
      })
    ]
  };