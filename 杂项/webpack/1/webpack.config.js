module.exports = {
	devtool:'sourcemap',
	entry:'./js/main.js',
	output:{
		filename:"bundle.js"
	},
	mode:'development',
	module: {
		loaders: [
		  {
		  	test: /\.css$/,
		  	loader: "style!css"
		  }
		]
	}
}