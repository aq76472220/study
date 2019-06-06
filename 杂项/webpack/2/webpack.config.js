const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
console.log(__dirname, path.resolve(__dirname), path.resolve())
module.exports = {
	entry:  {
		main:  './src/a.js'
	},
	output: {
	    path: path.resolve('dist'),
	    filename: 'bundle.js',
	},
}