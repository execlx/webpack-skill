const path = require('path');
const webpack = require('webpack');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const RemoveCommentsPlugin = require('./custom-plugin/remove-comments-plugin');
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
        new webpack.ProgressPlugin(),
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
        }),

        new RemoveCommentsPlugin(),
    ]
    // 添加其他配置项...
}