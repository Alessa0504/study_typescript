// 引入模块path，作用是拼接路径
const path = require('path');
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// webpack中所有的配置信息都应该写在module.exports中
module.exports = {

    mode: 'production',   //https://webpack.js.org/configuration/mode/
    //指定入口文件(ts从哪里开始执行)，一般会创建src目录用于存放ts代码
    entry: "./src/index.ts",

    //指定打包文件所在目录
    output: {
        //打包后的目录
        path: path.resolve(__dirname, 'dist'),  //利用path库拼接路径，等价于'./dist'
        //打包后的文件名
        filename: "bundle.js"
    },

    //指定webpack打包时要用到的模块
    module: {
        //rules指定加载规则
        rules: [
            {
                //test指定规则生效的文件
                test: /\.ts$/,   // '/ /'为正则，'\'为转义，用正则表达式匹配以.ts为结尾的文件
                //use表示用什么去处理test指定的文件
                use: 'ts-loader',  //用ts-loader处理.ts文件
                //exclude 要排除的文件
                exclude: /node_modules/   //排除node_modules
            }
        ]
    },

    // 配置Webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            title: "自定义title"
        })
    ],

    // 设置引用模块
    resolve: {
        //扩展名
        extensions: ['.ts', '.js']   //所有.ts或.js结尾的文件都可以作为模块引入
    }
};