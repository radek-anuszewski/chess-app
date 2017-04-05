define(function (require) {
    const Mn = require("backbone.marionette");
    const _ = require("underscore");

    return Mn.View.extend({
        template: _.template(`<span><%= character %></span>`),
        tagName: "p",
        onRender: function () {
            this.$el.addClass("field");
        },
    });
});