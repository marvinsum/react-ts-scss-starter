const CopyWebpackPlugin = require("copy-webpack-plugin");
const path              = require("path");

module.exports = {
    entry: "./src/index.ts",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        host: "0.0.0.0",
        port: 9000
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ]
    },
    output: {
        filename: 'app.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyWebpackPlugin([
            path.join(__dirname, "src/assets/index.html")
        ])
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
};
