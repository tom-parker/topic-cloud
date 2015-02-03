define([
	'backbone',
	'../templates/meta.hbs'
], function (Backbone, tpl) {

	'use strict';

	var View = Backbone.View.extend({

		template: tpl,

		/**
		 * initialize meta view
		 */
		initialize: function() {
			// Listen for changes on the topic collection
			this.listenTo(this.collection, 'changeSelectedItem', this.onSelectedItemChange);
		},

		/**
		 * onSelectedItemChange
		 * Render the meta information when the selected topic changes
		 * @param {Model} model
		 */
		onSelectedItemChange: function(model) {
			this.model = model;
			this.render();
		},

		/**
		 * render
		 * Render meta view with the current models data
		 */
		render: function() {
			if (this.model) {
				this.$el.html(this.template({
					topic: this.model.get('label'),
					mentions: this.model.get('volume'),
					sentiment: this.model.get('sentiment')
				}));
			}
		}

	});

	return View;
});
