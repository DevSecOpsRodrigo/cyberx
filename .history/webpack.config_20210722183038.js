const JscramblerWebpack = require('jscrambler-webpack-plugin');

module.exports = {
  entry: {
    protected: './app/index.js',
    unprotected: './app/index.js'
  },
  output: {
    filename: 'dist/[name].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new JscramblerWebpack({
      enable: true, // optional, defaults to true
      chunks: ['protected'] // optional, defaults to all chunks
    })
  ]
};
