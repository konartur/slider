const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    const isDevMode = argv.mode !== 'production';

    return {
        entry: './src/index.js',
        output: {
            filename: '[name].js',
            sourceMapFilename: '[file].map',
            path: path.resolve(__dirname, 'dist'),
        },
        devServer: {
            contentBase: "./dist",
        },
        devtool: isDevMode ? 'eval' : false,
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        isDevMode ? "style-loader" : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 2,
                                sourceMap: isDevMode,
                                modules: {
                                  auto: /\.module\.s[ac]ss$/i,
                                  exportLocalsConvention: 'camelCaseOnly'
                                }

                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        "postcss-preset-env"
                                    ]
                                }
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: isDevMode
                            }
                        }
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.js']
        },
        optimization: {
            minimize: !isDevMode,
            minimizer: isDevMode ? [] : [new TerserPlugin()],
            splitChunks: {
                chunks: 'all',
            }
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebPackPlugin({
                template: 'src/index.html'
            }),
            new ESLintPlugin(),
        ].concat(isDevMode ? [] : [new MiniCssExtractPlugin(), new CompressionWebpackPlugin()])
    };
};
