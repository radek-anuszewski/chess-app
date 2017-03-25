define(function (require) {
    const $ = require('jquery');
    const _ = require('underscore');
    const Mn = require("backbone.marionette");

    return Mn.View.extend({
        el: "#main",
        template: _.template($("#home-view").html()),
    });
});