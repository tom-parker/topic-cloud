define([
	'backbone',
	'../templates/topic.hbs'
], function (Backbone, tpl) {

	'use strict';

	var TopicView = Backbone.View.extend({

		template: tpl,

		// State classes for the topics
		states: {
			neutral: 'topic--neutral',
			positive: 'topic--positive',
			negative: 'topic--negative',
			vol1: 'topic--vol1',
			vol2: 'topic--vol2',
			vol3: 'topic--vol3',
			vol4: 'topic--vol4',
			vol5: 'topic--vol5',
			vol6: 'topic--vol6'
		},

		/**
		 * initialize the topic view
		 */
		initialize: function() {
			this.render();
		},

		events: {
			'click': 'onTopicClick'
		},

		/**
		 * onTopicClick
		 * Change the selected topic on the topic collection
		 */
		onTopicClick: function() {
			this.collection.selectItem(this.model);
		},

		/**
		 * getState
		 * Generates a string of state classes for a topic
		 * @return {String}
		 */
		getState: function() {
			var state = ['topic'];

			state.push(this.getSentimentState(), this.getVolumeState());

			return state.join(' ');
		},

		/**
		 * getSentimentState
		 * Returns a state class based on sentiment score
		 * @return {String}
		 */
		getSentimentState: function() {
			var sentimentScore = this.model.get('sentimentScore');
			if (sentimentScore > 60) {
				return this.states.positive;
			}
			if (sentimentScore < 40) {
				return this.states.negative;
			}

			return this.states.neutral;
		},

		/**
		 * getVolumeState
		 * Returns a state class based on volume
		 * @return {String}
		 */
		getVolumeState: function() {
			var min = this.collection.first().get('volume'),
				max = this.collection.last().get('volume'),
				volume = this.model.get('volume'),
				// Get normalised volume based on a 1-6 scale
				normalisedVol = Math.floor(1 + (((volume - min) * (6 - 1)) / (max - min)));

			// Return relevant state class for normalised volume
			return this.states['vol' + normalisedVol];
		},

		/**
		 * render
		 * Render topic view
		 */
		render: function() {
			this.$el.html(this.template({
				topic: this.model.get('label'),
				state: this.getState()
			}));
		}
	});

	return TopicView;
});
