const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'bundle.js'
    },
    target: "web",
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/

            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(gif|png|jpg|svg|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }

        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3001
    }
}
