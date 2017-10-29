module.exports = {
    entry: {
        index: "./js/index.js" //指定的入口文件
    },
    output: {
        filename: "[name].js" //输出文件名
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js"]
    },
    module: { //在配置文件中添加JSON loader
        rules: [{
            test: /\.js$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["es2015"]
                }
            },
            exclude: /node_modules/,

        }]
    }
};