const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    watchContentBase: true,
    open: true,
    publicPath: '/',
    port: 8080,
    proxy: {
      "/api/products": "http://localhost:8081"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Revive Design Studios',
      template: './src/index.ejs',
      hash: true,
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
          
        ]
      },
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ]
      },
      {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
              'file-loader'
          ]
      }
    ]
  }
};
