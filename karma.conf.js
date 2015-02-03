// Karma configuration

var path = require('path');
var webpack = require("webpack");

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine-jquery', 'jasmine'],


    // list of files / patterns to load in the browser
    files: [
		{pattern: 'test/spec/fixtures/*.html', watched: true, included: false, served: true},
		'test/spec/index.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
	preprocessors: {
	  'test/spec/index.js': ['webpack']
	},

	webpack: {
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
	},


	webpackMiddleware: {
		stats: {
			colors: true
		}
	},
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


	plugins: [
		require("karma-jasmine"),
		require("karma-jasmine-jquery"),
		require("karma-spec-reporter"),
		require("karma-chrome-launcher"),
		require("karma-webpack")
	]
  });
};
