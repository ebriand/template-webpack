import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default
    {
        entry: path.resolve(__dirname, 'src/public/app/app.js'),
        output: {
            path: path.join(__dirname, 'dist/public'),
            publicPath: 'http://localhost:8080/',
            filename: '[name].bundle.js'
        },
        devtool: 'eval-source-map',
        devServer: {
            contentBase: './public/',
            stats: { colors: true},
            'history-api-fallback': true,
            progress: true,
            proxy: {
                '/api/**': { target: 'http://localhost:9000/' }
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery',
                'window.jQuery': 'jquery',
                _: 'lodash'
            }),
            new HtmlWebpackPlugin({
                template: 'src/public/index.html',
                inject: 'body'
            }),
        ],
        module: {
            loaders: [
                { test: /index.html$/, loader: 'html-loader' },
                { test: /\.html$/, loader: 'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './src/public/')) + '/!html', exclude: /index.html$/ },
                { test: /\.css$/, loader: 'style-loader!css-loader' },
                { test: /\.js$/, loaders: ['babel-loader', 'eslint-loader'], exclude: [/node_modules/, /webpack-dev-server.js$/] },

                { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
                { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
                { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
                { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
            ],
        }
    };
