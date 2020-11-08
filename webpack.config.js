const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    devtool: "cheap-module-source-map",
    target: "webworker",
    mode: process.env.NODE_ENV || "production",
    context: __dirname,
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                use: [{ loader: "ts-loader" }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.BUILD_DATE": JSON.stringify(process.env.BUILD_DATE),
            "process.env.GITHUB_TOKEN": JSON.stringify(process.env.GITHUB_TOKEN)
        }),
        new CopyPlugin([{ from: path.join(__dirname, "assets"), to: path.join(__dirname, "dist/assets") }])
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    }
};
