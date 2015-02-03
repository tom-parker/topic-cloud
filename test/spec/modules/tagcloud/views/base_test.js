define([
	'modules/tagcloud/views/base',
	'modules/tagcloud/collections/topics',
	'backbone'
], function(BaseView, TopicsCollection, Backbone) {
	describe('Base View', function() {
		jasmine.getFixtures().fixturesPath = 'base/test/spec/fixtures/';
		var ExtendedView, testView;

		beforeEach(function() {
			loadFixtures('base.html');
			ExtendedView = BaseView.extend({
				renderSubView: jasmine.createSpy()
			});
			testView = new ExtendedView();
		});

		afterEach(function() {
			testView.remove();
		});

		describe('.initialize', function() {
			it('should init a topics collection', function() {
				expect(testView.topicsCollection instanceof TopicsCollection).toEqual(true);
			});
		});

		describe('.renderSubViews', function() {
			it('should call renderSubView with each view definition', function() {
				var fakeView1 = {
					view: {},
					options: function() {}
				},
				fakeView2 = {
					view: {},
					options: function() {}
				};
				testView.views = {
					'.test-selector': fakeView1,
					'.another-test': fakeView2
				};
				testView.renderSubViews();
				expect(testView.renderSubView).toHaveBeenCalledWith('.test-selector', fakeView1);
			});
		});

		describe('.render', function() {
			it('should render itself and subviews', function() {
				spyOn(testView, 'renderSubViews');
				testView.render();
				expect(testView.$('span').text()).toEqual('Berghain');
				expect(testView.renderSubViews).toHaveBeenCalled();
			});
		});

	});

});
