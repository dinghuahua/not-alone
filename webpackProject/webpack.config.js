/**
 * Created by dingding on 2018/10/17.
 */
/**
 * webpack命令就可以了，这条命令会自动引用webpack.config.js文件中的配置选项
 * “__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
 * 这里会出现黄色的警告：在打包时请指定mode 的取值，不给mode设定值的话，mode将被设为默认值production。mode的取值有：development，production，none。
 * 现在为mode设置打包  webpack demo.js -o demo.bunble.js --mode development
 * npm可以引导任务执行，对npm进行配置后可以在命令行中使用简单的npm start命令来替代上面略微繁琐的命令。
 * 在package.json中对scripts对象进行相关设置即可，设置方法如下。
 * package.json中的script会安装一定顺序寻找命令对应位置，
 * 本地的node_modules/.bin路径就在这个寻找清单中，所以无论是全局还是局部安装的Webpack，你都不需要写前面那指明详细的路径了。
 * npm的start命令是一个特殊的脚本名称，其特殊性表现在，在命令行中使用npm start就可以执行其对于的命令，
 * 如果对应的此脚本名称不是start，想要在命令行中运行时，需要这样用npm run {script name}如npm run build，我们在命令行中输入npm start试试，输出结果如下：
 * "start": "webpack --mode development",
 * "server": "webpack-dev-server --open",   --open 打包后 autoOpenBrowser 浏览器自动打开
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//这个插件的作用是依据一个简单的index.html模板，
// 生成一个自动引用你打包后的JS文件的新index.html。
// 这在每次生成的js文件名称不同时非常有用（比如添加了hash值）。
module.exports = {
    mode: 'development', //  production  development
    devtool: 'eval-source-map',
    entry:  __dirname + "/app/index.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/build",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer: {
        // inline选项会为入口页面添加“热加载”功能，即代码改变后重新加载页面。
        // 1. 不会刷新浏览器
        // $ webpack-dev-server
        //2. 刷新浏览器
        // $ webpack-dev-server --inline
        //3. 重新加载改变的部分，不会刷新页面
        // $ webpack-dev-server --hot
        //4. 重新加载改变的部分，HRM失败则刷新页面
        // $ webpack-dev-server  --inline --hot
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新    只有app中打包的文件 改动才会自动刷新并更新index.html   但是只有index.html改动时不会自动刷新
    },
    /**
     * 在webpack中配置Babel的方法如下:
     */
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index2.tmpl.html",//new 一个这个插件的实例，并传入相关的参数
            favicon: './favicon.ico', // 添加小图标
        }),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
}