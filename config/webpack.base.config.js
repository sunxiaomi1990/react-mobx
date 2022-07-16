const path = require('path');
const { ModuleFilenameHelpers } = require('webpack');

const webpackBaseConfig = {
    entry:path.join(__dirname,'../src/index'),
    output:{
        path:path.join(__dirname, '../dist'),
        filename:'[name].[fullhash:4].js'
    },
    resolve:{
        extensions:['.js','.jsx','.tsx']
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude:/node_modules/
            },
            {
                test:/\.(sc|c)ss/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }

}
module.exports=webpackBaseConfig;