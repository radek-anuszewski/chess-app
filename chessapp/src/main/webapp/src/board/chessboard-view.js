define(function (require) {
    const Mn = require("backbone.marionette");
    const _ = require('underscore');
    const $ = require('jquery');
    const WhiteRowView = require('./white-row-view');
    const BlackRowView = require('./black-row-view');
    const CharactersRowView = require('./characters-row-view');

    return Mn.CollectionView.extend({
        // el: "#chessboard-fields", Why kurwa!?!?!?!?!
        tagName: 'article',
        template: _.template($("#chessboard-view").html()),
        childView: function (item) {
            if (item.get("index") === 1 || item.get("index") === 10) {
                return CharactersRowView;
            }
            if (item.get("odd")) {
                return WhiteRowView;
            }
            if (item.get("even")) {
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