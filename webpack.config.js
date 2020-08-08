const path = require('path');

module.exports = {
    entry: './src/app.js', //What gets loaded and executed by default.
    output: {
        path: path.join(__dirname,'public'), //absolute path on your machine to where you want to output the webpack file. Put it in the public folder
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]  
    },
    mode:'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname,'public'),
        historyApiFallback:true
    }

}; //webpack is going to grab this file and have access to whatever is on this object.