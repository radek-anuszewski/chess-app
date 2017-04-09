define(function (require) {
    const Mn = require("backbone.marionette");
    const Backbone = require("backbone");
    const SquareView = require("./square-view");

    return Mn.CollectionView.extend({
        template: _.template(`<div></div><br>`),
        collection: new Backbone.Collection([
            {type: 'number-left'},
            {type: 'black'},
            {type: 'white'},
            {type: 'black'},
            {type: 'white'},
            {type: 'black'},
            {type: 'white'},
            {type: 'black'},
            {type: 'white'},
            {type: 'number-right'},
        ]),
        childView: SquareView,
        tagName: 'section',
        onRender: function () {
            this.$el.addClass(`row-section starts-with-black`);
            this.$el.attr(`id`, `row-${this.model.get(`index`) - 1}`);
        },
    });
});