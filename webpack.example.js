const webpack = require('webpack');
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (dir, filename = '') {
  return path.join(__dirname, dir, filename)
}

const config = {
  entry: './example/index.js',
  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: './dist/example.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: resolve('example'),
    compress: true,
    hot: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        use: [{
          loader: 'eslint-loader',
          options: {
            fix: true
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        include: [resolve('src'), resolve('example')]
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        include: [resolve('src'), resolve('example')],
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: ['css-loader'],
              fallback: 'vue-style-loader'
            })
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename:  'example.css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('example', 'index.html'),
      filename: 'index.html'
    })
  ]
}
module.exports = config;