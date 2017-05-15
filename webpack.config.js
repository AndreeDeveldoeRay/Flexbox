/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-20T13:54:23+01:00
* @Email:  me@andreeray.se
* @Filename: webpack.config.js
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-20T22:32:31+02:00
*/



var webpack = require('webpack')

module.exports = {
    entry: [
        './src/entry'
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        modulesDirectories: [
            'node_modules',
            './src/components'
        ],
        extensions: ['','.js','.jsx','.css']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015','stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
              test: /\.css$/,
              loader: 'style-loader!css-loader',
              include: /flexboxgrid/
            }
        ]
    },
    devtool: 'cheep-module-eval-source-map'
}
