define(function (require) {
    const Mn = require("backbone.marionette");
    const _ = require('underscore');
    const $ = require('jquery');

    return Mn.CollectionView.extend({
        // el: "#chessboard-fields", Why kurwa!?!?!?!?!
        tagName: 'article',
        template: _.template($("#chessboard-view").html()),
        childView: function (item) {
            if (item.odd) {
                return Mn.View.extend({
                    template: _.template('Odd row<br>'),
                    tagName: 'section',
                });
            }
            if (item.even) {
                return Mn.View.extend({
                    template: _.template('Even row<br>'),
                    tagName: 'section',
                });
            }
        },
        // Use attach HTML in some way
        // attachElContent: function (html) {
        //     this.$el.find("#chessboard-fields").html(`${this.$el.find("#chessboard-fields") + html}`);
        //     return this;
        // }
    });
});