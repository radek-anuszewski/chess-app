define(function (require) {
    "use strict";
    const Mn = require("backbone.marionette");
    const _ = require("underscore");
    return Mn.View.extend({
        template: _.template(`<p class="text-center"><%= from %>-<%= to %></p>`),
        tagName: "p",
    });
});