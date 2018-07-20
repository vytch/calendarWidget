// require("babel-register");
// require('ignore-styles');

const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const webpack = require('webpack');
const extractCSSProject = new ExtractTextPlugin('asset/project/[name]-project.css');
const extractCSS = new ExtractTextPlugin('asset/doc/[name]-one.css');
const extractJS = new ExtractTextPlugin('stylesheets/[name]-one.js');
const paths = require('./config/ss_route');

console.log('===================================');
console.log(path.resolve(__dirname, './layouts'));
console.log('===================================');

const sassColors = './data/colors.json';

module.exports = {
  target: 'web',
  entry: './config/index.jsx',
  watch: true,
  output: {
    filename: 'bedindex.js',
    path: __dirname + '/dist',
    /* IMPORTANT!
     * You must compile to UMD or CommonJS
     * so it can be required in a Node context: */
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js','.jsx','.scss'],
    modules: [
        'node_modules'
    ],
    alias: {
      'core-layout': path.resolve(__dirname, './src/layouts'),
      'core-pages': path.resolve(__dirname, './src/templates'),
      'docs-pages': path.resolve(__dirname, './src/docs/pages'),
      'core-styleguide': path.resolve(__dirname, './src/styleguides'),
      'data': path.resolve(__dirname, './data'),
      'core-svg': path.resolve(__dirname, './src/assets/imgs/svg-src'),
      'core-partials': path.resolve(__dirname, './src/partials'),
      'docs-partials': path.resolve(__dirname, './src/docs/components'),
      'core-sass':  path.resolve(__dirname, './src/assets/scss'),
      'core-imgs':  path.resolve(__dirname, './src/assets/imgs'),
      'core-videos':  path.resolve(__dirname, './src/assets/videos')

    }
  },
  module: {
    loaders: [
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: './fonts/[name].[ext]'
        }
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, "./src/styleguides"),
          path.resolve(__dirname, "./src/docs"),
          path.resolve(__dirname, "./src/layouts")
        ],
        use: extractCSS.extract([ 'css-loader' ])
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, "./src/partials"),
          path.resolve(__dirname, "./src/templates"),
        ],
        use: extractCSSProject.extract([ 'css-loader' ])
      },
      {
        test: /\.(sass|scss)/,

        include: [
          path.resolve(__dirname, "./src/partials"),
          path.resolve(__dirname, "./src/templates"),
        ],
        use: extractCSSProject.extract({
          use: [
          {
            loader: "css-loader"
          }, {
            loader: "sass-loader",
            options: {
              includePaths: [path.resolve(__dirname, 'node_modules/ddbreakpoints/lib')]
            }
          }, {
            loader: "jsontosass-loader",
            options: {
              path: sassColors
            }
          }
          ]
        }),
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, "./src/styleguides"),
          path.resolve(__dirname, "./src/docs"),
          path.resolve(__dirname, "./src/layouts")
        ],
        use: extractCSS.extract({
          use: [
          {
            loader: "css-loader"
          }, {
            loader: "sass-loader",
            options: {
              includePaths: [path.resolve(__dirname, 'node_modules/ddbreakpoints/lib')]
            }
          }, {
            loader: "jsontosass-loader",
            options: {
              path: sassColors
            }
          }
          ]
        }),
      },
      {
        test: /\.(es6|js|jsx)$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: [/node_modules\//],
        loader: 'babel-loader!eslint-loader'
      },
      {
        test: /script\.(es6|js|jsx)$/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },

      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(gif|png|mp4|jpe?g)$/i,
        loaders: [
          'file-loader', {
            loader: 'image-webpack-loader',
            options: {
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // Specifying webp here will create a WEBP version of your JPG/PNG images
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    extractCSS,
    extractCSSProject,
    extractJS,
    new StaticSiteGeneratorPlugin({
      paths: paths.routes,
      locals: {
        // Properties here are merged into `locals`
        // passed to the exported render function
        assets: './src/assets/css/bootstrap.min.css'
      }
    })
  ]

};
