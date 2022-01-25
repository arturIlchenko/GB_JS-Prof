const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: {
		main: path.resolve(__dirname, './src/index.js'),
	},

	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'GeekBrains Shop JS2',
			template: path.resolve(__dirname, './public/template.html'), // шаблон
			filename: 'index.html', // название выходного файла
		}),
	],
	module: {
		rules: [
			{
				test: /\.s[ca]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				]
			}
		]
	}
}