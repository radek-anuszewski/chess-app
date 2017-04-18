define(function (require) {
    "use strict";
    const Mn = require("backbone.marionette");
    const _ = require("underscore");
    const $ = require("jquery");
    const WhiteRowView = require("./white-row-view");
    const BlackRowView = require("./black-row-view");
    const CharactersRowView = require("./characters-row-view");
    const Radio = require("backbone.radio");

    return Mn.CollectionView.extend({
        tagName: "article",
        template: _.template($("#chessboard-view").html()),
        initialize: function () {
            this.chessboardMoveChannel = new Radio.channel("chessboardMoves");
            this.color = "white";
            this.from = undefined;
            this.to = undefined;
            this.fieldClickedChannel = new Radio.channel("fieldClick");
            this.listenTo(this.fieldClickedChannel, "field:clicked", this.onFieldClicked);
        },
        onFieldClicked: function ({clickedField}) {
            if (!this.from) {
                this.from = clickedField;
            }
            else {
                this.to = clickedField;
            }
            if (this.from && this.to) {
                this.chessboardMoveChannel.trigger("move", {
                    color: this.color,
                    from: this.from,
                    to: this.to,
                });
                this.from = undefined;
                this.to = undefined;
                this.color = this.color === "white"? "black" : "white";
            }
        },
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