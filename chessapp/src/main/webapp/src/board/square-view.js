define(function (require) {
    const Mn = require("backbone.marionette");
    const _ = require("underscore");

    return Mn.View.extend({
        template: _.template(``),
        tagName: "p",
        onRender: function () {
            this.$el.css("display", "inline-block");
            this.$el.addClass(`field field-${this.model.get("type")}`);
        },
    });
});