const webpack = require('webpack');
const path = require('path');

module.exports = {
	plugins: [
	new webpack.ProvidePlugin({
		$: "jquery",
		jQuery: "jquery"
	})
	],
	entry: './wp_start.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	}
};