const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/template.html'
    })],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    "targets": 'defaults'
                                }
                            ],
                            [
                                '@babel/preset-react',
                                {
                                    "runtime": "automatic"
                                }
                            ]
                        ]
                    }
                }]
            }
        ]
    }
}