const path = require('path')
const nodeExternals = require('webpack-node-externals')
const WebpackShellPlugin = require('webpack-shell-plugin')

module.exports = {
    entry: __dirname + '/src/index.js',
    target: 'node',
    output: {
        path: __dirname + '/build',
        filename: 'main.js'
    }
    
}