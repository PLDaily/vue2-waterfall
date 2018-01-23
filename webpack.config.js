const webpack = require('webpack');
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const pkg = require('./package.json')

const banner = `
${pkg.description}
v${pkg.version} ©${new Date().getFullYear()} ${pkg.author}
${pkg.homepage}
`.trim()

function resolve (dir, filename = '') {
  return path.join(__dirname, dir, filename)
}

const config = {
  entry: './src/index.js',
  output: {
    path: resolve('dist'),
    publicPath: '/',
    library: 'Vue2Waterfall',
    libraryTarget: 'umd',
    filename: 'vue2-waterfall.js'
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
        use: ['babel-loader']
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        include: [resolve('src')]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([resolve('dist')]),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.BannerPlugin(banner),
  ]
}
module.exports = config;