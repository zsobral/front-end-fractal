'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'polyfills.js'),
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    filename: 'index.js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    port: 3000,
    contentBase: path.resolve(__dirname, './'),
    historyApiFallback: true
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: path.resolve(__dirname, 'src')
      },
      {
        oneOf: [
          {
            test: /\.js$/,
            include: [path.resolve(__dirname, 'src')],
            use: ['babel-loader']
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: (loader) => [
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9'
                      ],
                      flexbox: 'no-2009'
                    })
                  ]
                }
              }
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  performance: {
    hints: false
  }
}
