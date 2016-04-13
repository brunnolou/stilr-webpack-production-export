var ExtractStilrPlugin = require('extract-stilr-webpack-plugin');

module.exports = {
  entry: {
    main: './index'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      include: __dirname,
      loader: 'babel',
      test: /\.jsx?$/
    }]
  },
  output: {
    filename: 'main.js',
    libraryTarget: 'umd',
    path: __dirname + '/dist'
  },
  plugins: [
    new ExtractStilrPlugin({
      chunkName: 'main',
      filename: 'main-prod.css'
    })
  ]
};
