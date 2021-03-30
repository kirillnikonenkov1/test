const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const setPath = (folderName) => {
    return path.join(__dirname, folderName)
}
const miniCssExtractPluginOptions = {
    loader: MiniCssExtractPlugin.loader,
    options: {
        esModule: false
    }
}

const config = {
    mode: process.env.NODE_ENV,
    entry: [
        './src/index.js'
    ],
    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: 'chunk.[name].[contenthash].js',
        path: path.resolve(__dirname, '/public'),
        publicPath: '/'
    },
    watchOptions: {
        poll: 1000,
        ignored: /node_modules/
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
    },
    devServer: {
        historyApiFallback: true,
        compress: false,
        hot: true,
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            ignoreOrder: true,
            filename: "css/index.[contenthash].css",
            chunkFilename: "css/chunk.[name].[contenthash].css"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.vue?$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: [
                            miniCssExtractPluginOptions,
                            "css-loader"
                        ],

                        js: ['babel-loader'],
                        sass: [
                            miniCssExtractPluginOptions,
                            'css-loader', 'sass-loader'
                        ],
                        vue: 'vue'
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/env']
                        }
                    }
                ]
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    miniCssExtractPluginOptions,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use:
                    [
                        miniCssExtractPluginOptions,
                        "css-loader"
                    ]
            }
        ],
    }
    // optimization: {
    //     runtimeChunk: 'single',
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'vendors',
    //                 chunks: 'all'
    //             }
    //         }
    //     }
    // }
}

module.exports = config
