module.exports = {
	devtool:'sourcemap',
	entry:'./js/main.js',
	output:{
		filename:"bundle.js"
	},
	mode:'development',
	module: {
		loader:[
		  {
		  	test: /\.css$/,
		  	loader: "style!css"
		  }
		]
	}
}