define([
	'backbone',
	'../models/topic'
], function (Backbone, TopicModel) {

	'use strict';

	var Collection = Backbone.Collection.extend({

		model: TopicModel,
		comparator: 'volume',

		/**
		 * selectItem
		 * @param {Model} item - Item to select in collection
		 */
		selectItem: function(item) {
			this.trigger('changeSelectedItem', item);
		}

	});

	return Collection;
});
