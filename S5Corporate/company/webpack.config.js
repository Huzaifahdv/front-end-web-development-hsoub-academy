const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {

    entry: './src/js/index.js',

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: 'index.html',
        })
    ]
}