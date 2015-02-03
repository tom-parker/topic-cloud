define([
	'modules/tagcloud/views/topic',
	'modules/tagcloud/collections/topics',
	'Backbone'
], function(TopicView, TopicCollection, Backbone) {
	describe('Topic View', function() {
		var testView, testCollection;

		beforeEach(function() {
			testCollection = new TopicCollection([
				{
					"id": "1751295897__Berlin",
					"label": "Berlin",
					"volume": 165,
					"type": "topic",
					"sentiment": {
						"negative": 3,
						"neutral": 133,
						"positive": 29
					},
					"sentimentScore": 65,
					"burst": 13,
					"days": [
						{
							"date": "2014-06-06T00:00:00.000+0000",
							"volume": 22
						},
						{
							"date": "2014-06-04T00:00:00.000+0000",
							"volume": 43
						},
						{
							"date": "2014-06-09T00:00:00.000+0000",
							"volume": 0
						},
						{
							"date": "2014-06-07T00:00:00.000+0000",
							"volume": 12
						},
						{
							"date": "2014-06-08T00:00:00.000+0000",
							"volume": 11
						},
						{
							"date": "2014-06-03T00:00:00.000+0000",
							"volume": 39
						},
						{
							"date": "2014-06-05T00:00:00.000+0000",
							"volume": 38
						}
					],
					"pageType": {
						"blog": 17,
						"facebook": 56,
						"forum": 22,
						"general": 5,
						"image": 0,
						"news": 26,
						"review": 1,
						"twitter": 35,
						"video": 3
					},
					"queries": [
						{
							"id": 1751295897,
							"name": "Berghain",
							"volume": 165
						}
					]
				},
				{
					"id": "1751295897__DJ",
					"label": "DJ",
					"volume": 48,
					"type": "topic",
					"sentiment": {
						"neutral": 46,
						"positive": 2
					},
					"sentimentScore": 54,
					"burst": 29,
					"days": [
						{
							"date": "2014-06-06T00:00:00.000+0000",
							"volume": 4
						},
						{
							"date": "2014-06-04T00:00:00.000+0000",
							"volume": 10
						},
						{
							"date": "2014-06-09T00:00:00.000+0000",
							"volume": 0
						},
						{
							"date": "2014-06-07T00:00:00.000+0000",
							"volume": 11
						},
						{
							"date": "2014-06-08T00:00:00.000+0000",
							"volume": 3
						},
						{
							"date": "2014-06-03T00:00:00.000+0000",
							"volume": 12
						},
						{
							"date": "2014-06-05T00:00:00.000+0000",
							"volume": 8
						}
					],
					"pageType": {
						"blog": 4,
						"facebook": 13,
						"forum": 8,
						"general": 1,
						"image": 0,
						"news": 7,
						"review": 1,
						"twitter": 13,
						"video": 1
					},
					"queries": [
						{
							"id": 1751295897,
							"name": "Berghain",
							"volume": 48
						}
					]
				},
				{
					"id": "1751295897__Ostgut Ton",
					"label": "Ostgut Ton",
					"volume": 24,
					"type": "topic",
					"sentiment": {
						"neutral": 22,
						"positive": 2
					},
					"sentimentScore": 58,
					"burst": 25,
					"days": [
						{
							"date": "2014-06-06T00:00:00.000+0000",
							"volume": 4
						},
						{
							"date": "2014-06-04T00:00:00.000+0000",
							"volume": 3
						},
						{
							"date": "2014-06-07T00:00:00.000+0000",
							"volume": 4
						},
						{
							"date": "2014-06-09T00:00:00.000+0000",
							"volume": 1
						},
						{
							"date": "2014-06-08T00:00:00.000+0000",
							"volume": 1
						},
						{
							"date": "2014-06-03T00:00:00.000+0000",
							"volume": 5
						},
						{
							"date": "2014-06-05T00:00:00.000+0000",
							"volume": 6
						}
					],
					"pageType": {
						"blog": 4,
						"facebook": 5,
						"forum": 2,
						"general": 3,
						"image": 0,
						"news": 8,
						"review": 1,
						"twitter": 0,
						"video": 1
					},
					"queries": [
						{
							"id": 1751295897,
							"name": "Berghain",
							"volume": 24
						}
					]
				}
			]);
			testView = new TopicView({
				collection: testCollection,
				model: new Backbone.Model({
					"id": "1751295897__DJ",
					"label": "DJ",
					"volume": 48,
					"type": "topic",
					"sentiment": {
						"neutral": 46,
						"positive": 2
					},
					"sentimentScore": 54,
					"burst": 29,
					"days": [
						{
							"date": "2014-06-06T00:00:00.000+0000",
							"volume": 4
						},
						{
							"date": "2014-06-04T00:00:00.000+0000",
							"volume": 10
						},
						{
							"date": "2014-06-09T00:00:00.000+0000",
							"volume": 0
						},
						{
							"date": "2014-06-07T00:00:00.000+0000",
							"volume": 11
						},
						{
							"date": "2014-06-08T00:00:00.000+0000",
							"volume": 3
						},
						{
							"date": "2014-06-03T00:00:00.000+0000",
							"volume": 12
						},
						{
							"date": "2014-06-05T00:00:00.000+0000",
							"volume": 8
						}
					],
					"pageType": {
						"blog": 4,
						"facebook": 13,
						"forum": 8,
						"general": 1,
						"image": 0,
						"news": 7,
						"review": 1,
						"twitter": 13,
						"video": 1
					},
					"queries": [
						{
							"id": 1751295897,
							"name": "Berghain",
							"volume": 48
						}
					]
				})
			});
		});

		afterEach(function() {
			testView.remove();
		});

		describe('.initialize', function() {
			it('should call render', function() {
				spyOn(testView, 'render');
				testView.initialize();
				expect(testView.render).toHaveBeenCalled();
			});
		});

		describe('.onTopicClick', function() {
			it('should select the item on the topic collection', function() {
				spyOn(testView.collection, 'selectItem');
				testView.onTopicClick();
				expect(testView.collection.selectItem).toHaveBeenCalledWith(testView.model);
			});
		});

		describe('.getState', function() {
			it('should return the correct state classes', function() {
				expect(testView.getState()).toEqual('topic topic--neutral topic--vol1');
				testView.model.set('sentimentScore', 100);
				expect(testView.getState()).toEqual('topic topic--positive topic--vol1');
				testView.model.set('sentimentScore', 3);
				expect(testView.getState()).toEqual('topic topic--negative topic--vol1');
			});
		});

		describe('.getSentimentState', function() {
			it('should return the correct state class for the sentiment score', function() {
				expect(testView.getSentimentState()).toEqual('topic--neutral');
				testView.model.set('sentimentScore', 100);
				expect(testView.getSentimentState()).toEqual('topic--positive');
				testView.model.set('sentimentScore', 5);
				expect(testView.getSentimentState()).toEqual('topic--negative');
			});
		});

		describe('.getVolumeState', function() {
			it('should return the correct state class for the relative volume', function() {
				expect(testView.getVolumeState()).toEqual('topic--vol1');
				testView.model.set('volume', 165);
				expect(testView.getVolumeState()).toEqual('topic--vol6');
				testView.model.set('volume', 110);
				expect(testView.getVolumeState()).toEqual('topic--vol4');
			});
		});

		describe('.render', function() {
			it('should render the topic', function() {
				testView.render();
				expect(testView.$('p').hasClass('topic')).toEqual(true);
				expect(testView.$('p').hasClass('topic--vol1')).toEqual(true);
				expect(testView.$('p').hasClass('topic--neutral')).toEqual(true);
				expect(testView.$('p').text()).toEqual('DJ');
			});
		});
	});
});
