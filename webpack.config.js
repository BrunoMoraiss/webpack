const path = require("path")

module.exports = {
    devServer:{
        static: {
            directory: path.resolve(__dirname, 'dist')
        }
    },
    entry: {
        index: './src/index.js'
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.js$/,
            use: ['babel-loader']
        } 
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'), //para colocar no caminho atual e adicionar tudo a pasta public
        filename: '[name].min.js'
    }
}