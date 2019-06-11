const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
	entry:  {
		main:  './src/index.js'
	},
	output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'index.js',
	},
  // module: {
  //   rules: [
  //     // ...
  //     {
  //       test: /\.css/,
  //       include: [
  //         path.resolve(__dirname, 'src'),
  //       ],
  //       use: [
  //         'style-loader',
  //         'css-loader',
  //       ],
  //     },
  //   ],
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 因为这个插件需要干涉模块转换的内容，所以需要使用它对应的 loader
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // 引入插件，配置文件名，这里同样可以使用 [hash]
    new ExtractTextPlugin('index.css'),
    new HtmlWebpackPlugin(),
  ],
}