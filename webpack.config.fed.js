var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var glob = require('glob');

var CopyWebpackPlugin = require('copy-webpack-plugin');

const extractCSSFED = new ExtractTextPlugin('[name]-fed.css');
const extractCSSGeneral = new ExtractTextPlugin('stylesheets/[name]-general.css');

const sassColors = './data/colors.json';

module.exports = {
  entry: {
    'asset/project/libs': './src/assets/js/libs.js',
    'asset/project/app': './src/assets/js/script.js',
    'asset/doc/styleguide': './src/assets/js/styleguide.js',
    'asset/doc/previewer': './src/assets/js/previewer.jsx',
    'asset/doc/doc': './src/assets/js/doc-script.jsx'
  },
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
        extensions: ['.js','.jsx','.scss'],
        modules: [
            './src',
            'node_modules'
        ],
        alias: {
          'core-sass':  path.resolve(__dirname, './src/assets/scss'),
          'data': path.resolve(__dirname, './data'),
          'core-partials': path.resolve(__dirname, './src/partials'),
          'docs-modules': path.resolve(__dirname, './src/docs/modules'),
          'fed-modules': path.resolve(__dirname, './src/assets/js/modules'),
          'core':  path.resolve(__dirname, './src/assets/js/react/core'),
          'js-utils': path.resolve(__dirname, './src/assets/js/utils'),
          'react-module':  path.resolve(__dirname, './src/assets/js/modules'),
          'json':  path.resolve(__dirname, './src/assets/json'),
          'reducers':  path.resolve(__dirname, './src/assets/js/modules/Event/Reducers'),
        }
   },
   plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        extractCSSFED,
        new CompressionPlugin({
          asset: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0
        }),
        new webpack.optimize.CommonsChunkPlugin({
          names: ['common'], // Specify the common bundle's name.
          filename: 'asset/common.js'
        }),
        new CopyWebpackPlugin([
          {
            from: 'src/assets/js/validators.js',
            to: 'asset/project/validators.js'
          },
          {
            from: 'src/assets/css/font.css',
            to: 'asset/project/font.css'
          }
        ], { copyUnmodified: true }),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        })
   ],
  module: {
    loaders: [

      {
        test: /\.(es6|js|jsx)$/,
          // excluding some local linked packages.
          // for normal use cases only node_modules is needed.
          exclude: [/node_modules\//, /config\//, /data\//, /libs\//],
          loader: 'babel-loader!eslint-loader'
      },
      {
        test: /\.(scss)$/,
        use: extractCSSFED.extract({
          use: [
          {
            loader: 'css-loader', // translates CSS into CommonJS modules
          }, {
            loader: 'sass-loader', // compiles SASS to CSS
            options: {
              includePaths: [path.resolve(__dirname, 'node_modules/ddbreakpoints/lib')]

            }
          }, {
            loader: "jsontosass-loader",
            options: {
              path: sassColors
            }
          }]
        })
      },
      {
        test: /\.css$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        use:ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
          test: /\.(ttf|eot|woff|woff2)$/,
          exclude: /node_modules/,
          loader: 'url-loader?limit=10000',
          options: {
              limit: 10000,
              name: './fonts/[name].[ext]'
          }
      },
      {
          test: /\.(png|svg)$/,
          exclude: /node_modules/,
          loader: 'url-loader?limit=10000',
          options: {
              limit: 10000,
              name: './images/[name].[ext]'
          }
      }
    ]
  }
}
