const path = require('path')
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