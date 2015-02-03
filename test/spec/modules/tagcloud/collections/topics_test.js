define([
	'modules/tagcloud/collections/topics'
], function(TopicsCollection) {
	describe('TopicsCollection', function() {
		var testCollection;

		beforeEach(function() {
			testCollection = new TopicsCollection();
		});

		it('should set the comparator to be volume', function() {
			expect(testCollection.comparator).toEqual('volume');
		});

		describe('.selectItem', function() {
			it('should trigger the changeSelectedItem event with the given model', function() {
				var testModel = {};
				spyOn(testCollection, 'trigger');
				testCollection.selectItem(testModel);
				expect(testCollection.trigger).toHaveBeenCalledWith('changeSelectedItem', testModel);
			});
		});
	});
});
