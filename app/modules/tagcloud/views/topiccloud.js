define([
	'backbone',
	'./topic'
], function (Backbone, TopicView) {

	'use strict';

	var TopicCloudView = Backbone.View.extend({

		items: [],
		placedItems: [],

		/**
		 * addItems
		 * Iterate over models creating a view for each topic
		 */
		addItems: function() {
			var items = this.collection.models;
			_.each(items, function(item) {
				var itemView = this.getItemView(item);
				this.el.appendChild(itemView.el);
				itemView.render();
				// Cache views for later use
				this.items.push(itemView);
			}, this);
		},

		/**
		 * getItemView
		 * Generates a view for a given topic
		 * @param {Model} model - Model to instantiate topic view with
		 * @return {View} topic view
		 */
		getItemView: function(model) {
			return new TopicView({
				model: model,
				collection: this.collection
			});
		},

		/**
		 * positionItems
		 * Position topic items within the cloud
		 */
		positionItems: function() {
			// Shuffle items to randomise the layout
			_.each(_.shuffle(this.items), this.position, this);
		},

		/**
		 * position
		 * Move topics within the cloud until there are no more intersects
		 * with previous topics
		 * @param {Object} item - item to currently move into position
		 */
		position: function(item) {
			var topicEl = item.$('.topic')[0],
				startPos = this.getStartPosition(topicEl),
				angle = 1;

			// Set initial position in the center of the canvas
			topicEl.style.left = startPos.startX + 'px';
			topicEl.style.top = startPos.startY + 'px';

			// Move item whilst still intersecting
			while(this.intersectsWithPrevious(item)) {
				// Calc next position and move
				var newPos = this.getNewPosition(angle);
				topicEl.style.left = startPos.startX + newPos.moveX + 'px';
				topicEl.style.top = startPos.startY + newPos.moveY + 'px';
				angle++;
			}
			// Cache positions of placed items for later intersect checking
			this.placedItems.push(topicEl.getClientRects()[0]);
		},

		/**
		 * getStartPosition
		 * Get the starting center position for a topic
		 * @param {Object} item
		 * @return {Object} starting position
		 */
		getStartPosition: function(item) {
			var canvasHeight = this.$el[0].clientHeight,
				canvasWidth = this.$el[0].clientWidth,
				itemHeight = item.clientHeight,
				itemWidth = item.clientWidth,
				startX = (canvasWidth / 2) - (itemWidth / 2),
				startY = (canvasHeight / 2) - (itemHeight / 2);

			return {
				startX: startX,
				startY: startY
			};
		},

		/**
		 * getNewPosition
		 * Using an Archimedean spiral to calculate the next x / y position for
		 * the topic
		 * @param {Number} angle - angle to calculate next spiral pos
		 * @return {Object} new position of topic
		 */
		getNewPosition: function(angle) {
			// Step can be tweaked to create a tighter spiral
			var step = 6,
				moveX = step * angle * Math.cos(angle),
				moveY = step * angle * Math.sin(angle);

			return {
				moveX: moveX,
				moveY: moveY
			};
		},

		/**
		 * intersectsWithPrevious
		 * Check intersection with previously placed topics
		 * @param {Object} item - Topic currently being placed
		 * @return {Boolean} was there an intersection with previously placed topics
		 */
		intersectsWithPrevious: function(item) {
			return _.some(this.placedItems, function(prevItem) {
				return this.checkIntersects(item, prevItem);
			}, this);
		},

		/**
		 * checkIntersects
		 * Check if two topics intersect
		 * @param {Object} item - current item being placed
		 * @param {Object} previous - a previously placed item
		 * @return {Boolean} was there an intersection
		 */
		checkIntersects: function(item, previous) {
			if (!previous) {
				return false;
			}

			var current = item.$('.topic')[0].getClientRects()[0];

			if (!current) return;

			return !(current.right < previous.left ||
					 current.left > previous.right ||
					 current.bottom < previous.top ||
					 current.top > previous.bottom);
		},

		/**
		 * render
		 * Render the topic cloud view
		 */
		render: function() {
			this.addItems();
			this.positionItems();
		}
	});

	return TopicCloudView;
});
