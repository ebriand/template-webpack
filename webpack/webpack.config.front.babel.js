import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const backendPort = process.env.PORT || 9000;
const prod = (process.env.NODE_ENV === 'production');
const projectRoot = path.join(__dirname, '..');

function getPlugins() {
  let plugins = [];
  if (prod) {
    plugins.push(new webpack.NoErrorsPlugin());
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    plugins.push(new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}));
    plugins.push(new webpack.EnvironmentPlugin(['NODE_ENV']));
  }
  plugins.push(new webpack.ProvidePlugin({ jQuery: 'jquery', $: 'jquery', 'window.jQuery': 'jquery', _: 'lodash'}));
  plugins.push(new HtmlWebpackPlugin({ template: 'src/public/index.html', inject: 'body'}));
  return plugins;
}

function devServer() {
  return {
    contentBase: './public/',
    stats: { colors: true },
    'history-api-fallback': true,
    progress: true,
    proxy: {
      '/api/**': { target: `http://localhost:${backendPort}` }
    }
  };
}

export default {
  entry: path.resolve(projectRoot, 'src/public/app/app.js'),
  output: {
    path: path.join(projectRoot, 'dist/public'),
    publicPath: prod ? 'public/' : '',
    filename: '[hash].js'
  },
  devtool: prod ? '' : 'eval-source-map',
  devServer: prod ? undefined : devServer(),
  plugins: getPlugins(),
  module: {
    loaders: [
      { test: /index.html$/, loader: 'html-loader' },
      { test: /\.html$/, loader: 'ngtemplate-loader?relativeTo=' + (path.resolve(projectRoot, './src/public/')) + '/!html', exclude: /index.html$/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js$/, loaders: ['babel-loader', 'eslint-loader'], exclude: [/node_modules/, /webpack-dev-server.js$/] },

      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
    ]
  }
}
