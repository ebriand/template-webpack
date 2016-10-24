import webpack from 'webpack';
import path from 'path';
import _ from 'lodash';
import fileUrl from 'file-url';

// Make every dependency as external lib to load with commonjs
const nodeModules = 
    _(require('./package.json').dependencies)
        .keys()
        .map((dependency) =>  {  return [dependency, 'commonjs ' + dependency]; })
        .fromPairs()
        .value();

function getFilenameTemplate(resourcePath, absoluteResourcePath) {
    return (process.env.NODE_ENV === 'production') ? resourcePath : absoluteResourcePath;
}

export default 
    {
        entry: path.resolve(__dirname, 'src/server/server.js'),
        target: 'node',
        output: {
            path: path.join(__dirname, 'dist/server'),
            filename: 'server.js',
            devtoolModuleFilenameTemplate: ({resourcePath, absoluteResourcePath}) => getFilenameTemplate(resourcePath, absoluteResourcePath)
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
