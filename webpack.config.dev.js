const webpack = require('webpack');
const name = require('./constants').libraryName;

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/demo',
    publicPath: '/',
    filename: `${name}.js`,
    library: name,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './demo',
    watchContentBase: true,
    hot: true
  }
};
