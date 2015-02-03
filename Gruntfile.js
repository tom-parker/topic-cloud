module.exports = function(grunt) {
	require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);

	var webpack = require("webpack");
	var webpackConfig = require("./webpack.config.js");
	grunt.initConfig({
		webpack: {
			options: webpackConfig,
			build: {
				plugins: webpackConfig.plugins.concat(
					new webpack.optimize.DedupePlugin(),
					new webpack.optimize.UglifyJsPlugin()
				)
			},
			"build-dev": {
				devtool: "sourcemap",
				debug: true
			}
		},
		sass: {
			dist: {
				files: {
					'./assets/style.css': './assets/style.scss'
				}
			}
		},
		watch: {
			app: {
				files: ["app/**/*", "bower_components/**/*"],
				tasks: ["webpack:build-dev"],
				options: {
					spawn: false,
				}
			},
			sass: {
				files: ["assets/**/*"],
				tasks: ["sass:dist"],
				options: {
					spawn: false,
				}
			}
		},
		connect: {
			server: {
				options: {
					port: 9001
				}
			}
		}
	});

	// The development server (the recommended option for development)
	grunt.registerTask("default", ["webpack:build-dev", "connect", "watch"]);

	// Production build
	grunt.registerTask("build", ["webpack:build"]);
};
