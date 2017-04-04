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
                    this.odd = !!(index % 2);
                    this.even = !(this.odd);
                    this.index = index;
                },
            });
            const Rows = Backbone.Collection.extend({
                model: RowModel,
            });
            const rows = new Rows();
            for (let index = 0; index < 8; index++) {
                rows.add(new RowModel({
                    index: (index + 1),
                }));
            }
            return rows;
        },
    });
});