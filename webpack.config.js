const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'none',

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.md$/i,
                use: './md-loader'
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Execl',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: 'public', to: 'assets' }
            ]
        })
    ]
    // 添加其他配置项...
}