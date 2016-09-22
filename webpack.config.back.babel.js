import webpack from 'webpack';
import path from 'path';
import _ from 'lodash';

// Make every dependency as external lib to load with commonjs
const nodeModules = 
    _(require('./package.json').dependencies)
        .keys()
        .map((dependency) =>  {  return [dependency, 'commonjs ' + dependency]; })
        .fromPairs()
        .value();

nodeModules['config'] = 'commonjs ' + './config';
export default 
    {
        entry: path.resolve(__dirname, 'src/server/server.js'),
        target: 'node',
        output: {
            path: path.join(__dirname, 'dist/server'),
            filename: 'server.js'
        },
        externals: nodeModules,
        plugins: [
            new webpack.BannerPlugin('require("source-map-support").install();',
                { raw: true, entryOnly: false })
        ],
        devtool: 'source-map',
        module: {
            loaders: [
                { test: /\.js$/, loaders: ['babel-loader', 'eslint-loader'] },
            ]
        }
    };
