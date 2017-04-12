define(function (require) {
    "use strict";
    const Mn = require("backbone.marionette");
    return Mn.Behavior.extend({
        defaults: {
            color: "unset",
        },
        onRender: function () {
            this.$el.addClass(`row-section starts-with-${this.getOption("color")}`);
            this.$el.attr("id", `row-${this.view.model.get("index") - 1}`);
        }
    });
});