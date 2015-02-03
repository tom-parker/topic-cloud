define([
    'backbone',
    'modules/tagcloud/router'
], function (Backbone, Router) {
    'use strict';

    var app = {

        /**
         * Starts the application.
         */
        start: function() {
        	this.router = new Router();
            Backbone.history.start({
                pushState: true,
                root: '/'
            });
        }
    };

    app.start();

    return app;
});
