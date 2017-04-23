define(function (require) {
    const $ = require('jquery');
    const _ = require('underscore');
    const Mn = require("backbone.marionette");
    const Backbone = require("backbone");
    const ChessboardView = require("../board/chessboard-view");
    const MovesTabView = require("../moves/moves-tab-view");

    class HomeView extends Mn.View {
        el() {
            return "#main"
        }
        regions() {
            return {
                chessboard: "#chessboard",
                movesDisplay: "#moves-display",
            }
        }
        template() {
            return _.template($("#home-view").html())
        }
        onRender() {
            this.showChildView("chessboard", new ChessboardView({
                collection: this._getRows(),
            }));
            this.showChildView("movesDisplay", new MovesTabView());
        }
        _getRows() {
            const rows = [];
            for (let index = 0; index < 10; index++) {
                rows.push({
                    index: (10 - index),
                    odd: !!((index + 1) % 2),
                    even: !((index + 1) % 2),
                });
            }
            return new Backbone.Collection(rows);
        }
    }
    return HomeView;
});