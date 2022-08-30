//webpack配置文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    //配置入口
    entry: "./src/main.ts",
    //配置出口
    output: {
        //文件的输出路径
        path: path.resolve(__dirname, 'dist'),//当前文件夹下的dist目录中
        filename: "static/js/main.js",
        clean: true,
    },
    //加载器
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["ts-loader"],
                exclude: /node-modules/
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
            },

        ],

    },
    //一些插件
    plugins: [
        new HtmlWebpackPlugin({
            //结构一致，自动引入打包资源
            template: path.resolve(__dirname, 'public/index.html')
        }),

    ],
    resolve: { extensions: ['.ts', '.js'], },
    //开发服务器
    devServer: {
        host: "localhost",
        port: "8080",
        open: true,
    },
    //指定模式
    mode: "development",

}