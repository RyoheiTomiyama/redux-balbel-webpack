var autoprefixer = require('autoprefixer');
var precss = require('precss');
module.exports = [
{
	entry: './index.js',
	output: {
		path: './',
		filename: 'bundle.js',
		publicPath: ''
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
},
{
	entry: './css/index.js',
	output: {
		path: './',
		filename: 'style.js',
		publicPath: ''
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!postcss-loader'
			}
		]
	},
	postcss: function(){
		return [autoprefixer, precss];
	}
}
];
