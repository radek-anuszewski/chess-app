define(function (require) {
    const Mn = require("backbone.marionette");

    return Mn.View.extend({
        template: _.template(`<div></div><br>`),
        tagName: 'section',
        onRender: function () {
            this.$el.addClass(`starts-with-white`);
            this.$el.attr(`id`, `row-${this.model.get(`index`)}`);
        }
    });
});