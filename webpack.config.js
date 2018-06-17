const path = require('path');

module.exports = (env) => {
	const environment = env;

	entry: (environment !== 'production' ? [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8000',
		'webpack/hot/only-dev-server',
		] : []).concat(['./client/index.js']),
	output: {
			path: path.resolve(__dirname, 'public'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader'},
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					}
				]
			}
		]
	}
	}
};