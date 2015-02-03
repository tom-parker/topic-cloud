define([
	'modules/tagcloud/views/meta',
	'Backbone'
], function(MetaView, Backbone) {
	describe('Meta View', function() {
		jasmine.getFixtures().fixturesPath = 'base/test/spec/fixtures/';
		var testView, testCollection;

		beforeEach(function() {
			loadFixtures('meta.html');
			testCollection = new Backbone.Collection();
			testView = new MetaView({
				collection: testCollection
			});
		});

		afterEach(function() {
			testView.remove();
		});

		describe('.initialize', function() {
			it('should listenTo the changeSelectedItem event on the topics collection', function() {
				spyOn(testView, 'listenTo');
				testView.initialize();
				expect(testView.listenTo).toHaveBeenCalledWith(testView.collection, 'changeSelectedItem', testView.onSelectedItemChange);
			});
		});

		describe('.onSelectedItemChange', function() {
			it('should set the model and call render', function() {
				var fakeModel = {};
				spyOn(testView, 'render');
				testView.onSelectedItemChange(fakeModel);
				expect(testView.model).toEqual(fakeModel);
				expect(testView.render).toHaveBeenCalled();
			});
		});

		describe('.render', function() {
			it('should render the relevant data from the model', function() {
				var fakeModel = new Backbone.Model({
					label: 'my topic',
					volume: 200,
					sentiment: {
						positive: 10,
						neutral: 5,
						negative: 3
					}
				});
				testView.model = fakeModel;
				testView.render();
				expect(testView.$('.meta__topic').text()).toEqual('my topic');
				expect(testView.$('.meta__sentiment--positive').text()).toEqual('10');
				expect(testView.$('.meta__sentiment--neutral').text()).toEqual('5');
				expect(testView.$('.meta__sentiment--negative').text()).toEqual('3');
			});
		});

	});
});
