const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './script.js',
    output: {
        path: __dirname,
        filename: 'biuld.js'
    },
    module: {
        rules: [
            {
                use: [
                    'style-loader',
                    'css-loader'
                ],
                test: /\.css$/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('biuld.js'),
    ]
};