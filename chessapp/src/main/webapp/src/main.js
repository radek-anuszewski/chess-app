require.config({
    paths: {
        "jquery": "../libs/jquery/dist/jquery",
        "underscore": "../libs/underscore-amd/underscore",
        "backbone": "../libs/backbone-amd/backbone",
        "backbone.radio": "../libs/backbone.radio/build/backbone.radio",
        "backbone.marionette": "../libs/marionette/lib/backbone.marionette",
    },
});

require(['app/app'], function (app) {
});