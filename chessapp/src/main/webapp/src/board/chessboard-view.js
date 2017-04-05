define(function (require) {
    const Mn = require("backbone.marionette");
    const _ = require('underscore');
    const $ = require('jquery');
    const WhiteRowView = require('./white-row-view');
    const BlackRowView = require('./black-row-view');

    return Mn.CollectionView.extend({
        // el: "#chessboard-fields", Why kurwa!?!?!?!?!
        tagName: 'article',
        template: _.template($("#chessboard-view").html()),
        childView: function (item) {
            if (item.get("odd")) {
                return WhiteRowView;
            }
            if (item.get()) {
                return BlackRowView;
            }
        },
        // Use attach HTML in some way
        // attachElContent: function (html) {
        //     this.$el.find("#chessboard-fields").html(`${this.$el.find("#chessboard-fields") + html}`);
        //     return this;
        // }
    });
});