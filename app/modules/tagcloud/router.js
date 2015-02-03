define([
	'backbone',
	'modules/tagcloud/views/base'
], function (Backbone, BaseView) {

	'use strict';

	var Router = Backbone.Router.extend({
		routes : {
			'': 'index',
		},

		index: function() {
			this.setContent(BaseView);
		},

		/**
		 * setContent
		 * Set the content with the given view
		 * @param {Object} View - View definition
		 */
		setContent: function (View) {
			this.currentContent = new View();
		}
	});

	return Router;
});
