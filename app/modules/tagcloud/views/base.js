define([
	'backbone',
	'underscore',
	'./topiccloud',
	'./meta',
	'../collections/topics',
	'json!../data/topics.json',
	'../templates/base.hbs'
], function (Backbone, _, TopicCloudView, MetaView, TopicsCollection, topicsData, tpl) {

	'use strict';

	var BaseView = Backbone.View.extend({

		el: '.wrapper',
		template: tpl,

		/**
		 * initialize base view
		 */
		initialize: function() {
			// Create new topics collection with data
			this.topicsCollection = new TopicsCollection(topicsData.topics);
			this.render();
		},

		// Subview definitions
		views: {
			'.js-topic-cloud' : {
				view: TopicCloudView,
				options: function() {
					return {
						collection: this.topicsCollection
					};
				}
			},
			'.js-meta' : {
				view: MetaView,
				options: function() {
					return {
						collection: this.topicsCollection
					};
				}
			}
		},

		/**
		 * renderSubViews
		 * Iterate over subview definitions and initialize
		 */
		renderSubViews: function() {
			_.each(this.views, function(view, selector) {
				this.renderSubView(selector, view);
			}, this);
		},

		/**
		 * renderSubView
		 * Render a supplied view into a supplied selector
		 * @param {String} selector - selector for subview
		 * @param {Object} view - view definition for subview
		 */
		renderSubView: function(selector, view) {
			var ViewDefinition = view.view,
				options = view.options.call(this);
			var subView = new ViewDefinition(options);
			subView.setElement(this.$(selector)).render();
		},

		/**
		 * render
		 * Render base view
		 */
		render: function() {
			this.$el.html(this.template({
				title: this.topicsCollection.first().get('queries')[0].name
			}));
			// Call to render subviews
			this.renderSubViews();
		}

	});

	return BaseView;
});
