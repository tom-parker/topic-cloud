var path = require('path');
var webpack = require("webpack");
var BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
	entry:   "./app/app.js",
	output:  {
		path:     __dirname,
		filename: "./app/bundle.js"
	},
	module:  {
		loaders: [
			{ test: /\.hbs$/, loader: "handlebars-loader" }
		]
	},
    resolve: {
        root: [
            path.join(__dirname, 'bower_components'),
            path.join(__dirname, 'app')
		]
	},
	plugins: [
		new webpack.ResolverPlugin(
			new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
		),
		new webpack.ProvidePlugin({
			_: "underscore"
		}),
		new webpack.ProvidePlugin({
			$: "jQuery"
		})
	]
};
