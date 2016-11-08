import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const projectRoot = path.join(__dirname, '..');

export default {
  entry:  path.resolve(projectRoot, 'src/public/app/app.js'),
  output: {
      path: path.join(projectRoot, 'dist/public'),
      publicPath: 'public/',
      filename: '[hash].js'
  },
  plugins: [
      new webpack.ProvidePlugin({
          jQuery: 'jquery',
          $: 'jquery',
          'window.jQuery' : 'jquery',
          _: 'lodash'
      }),
      new webpack.DefinePlugin({
          'process.env': {
              NODE_ENV: JSON.stringify('production'),
          },
      }),
      new HtmlWebpackPlugin({
          template: 'src/public/index.html',
          inject: 'body'
      }),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          }
      }),
  ],
  module: {
      loaders:
      [
          { test: /index.html$/, loader: 'html-loader' },
          { test: /\.html$/, loader: 'ngtemplate-loader?relativeTo=' + (path.resolve(projectRoot, './src/public/')) + '/!html', exclude: /index.html$/},
          { test: /\.css$/, loader: 'style-loader!css-loader' },
          { test: /\.js$/, loaders: ['babel-loader', 'eslint-loader'], exclude: [/node_modules/] },

          {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
          {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
          {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
          {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
      ]
  }
};
