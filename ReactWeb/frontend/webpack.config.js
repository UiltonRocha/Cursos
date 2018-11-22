const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/index.jsx',
    output: {
        filename: './app.js',
        path: __dirname + '/public'
    },
    devServer:{
        contentBase: './public',
        port: 8080
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    module: {
        rules:[{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', //Adiciona CSS e DOM injetando a tag <style>
                'css-loader', //Interpreta @import, url()...
                'sass-loader'
            ]
        }, {
            test:  /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}