const path = require('path')

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'this'
    }
}
