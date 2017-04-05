define(function (require) {
    const $ = require('jquery');
    const _ = require('underscore');
    const Mn = require("backbone.marionette");
    const Backbone = require("backbone");
    const ChessboardView = require("../board/chessboard-view");

    return Mn.View.extend({
        el: "#main",
        regions: {
            chessboard: "#chessboard",
        },
        template: _.template($("#home-view").html()),
        onRender: function () {
            this.showChildView('chessboard', new ChessboardView({
                collection: this._getRows(),
            }));
        },
        _getRows: function () {
            const rows = [];
            for (let index = 0; index < 8; index++) {
                rows.push({
                    index: (index + 1),
                    odd: !!(index % 2),
                    even: !(index % 2),
                });
            }
            return new Backbone.Collection(rows);
        },
    });
});