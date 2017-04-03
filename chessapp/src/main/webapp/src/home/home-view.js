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
            const RowModel = Backbone.Model.extend({
                initialize ({index}) {
                    this.even = !!(!(index % 2));
                    this.odd = !!(index % 2);
                },
            });
            const Rows = Backbone.Collection.extend({
                model: RowModel,
            });
            const rows = new Rows();
            for (let index = 0; index < 8; index++) {
                rows.add(new RowModel({
                    index,
                }));
            }
            return rows;
        },
    });
});