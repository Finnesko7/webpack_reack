var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function (env) {
    var production = !env || env.NODE_ENV === 'production';
    return {
        mode: production ? 'production' : 'development',
        entry: './src/script.jsx',
        output: {
            path: path.join(__dirname, './dist')
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: 'babel-loader'
                },
                {
                    test: /\.s[ac]ss$/,
                    use: [
                        production ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            new MiniCssExtractPlugin()
        ]
    };
};