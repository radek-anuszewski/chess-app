define(function (require) {
    "use strict";
    const Backbone = require("backbone");
    const Mn = require("backbone.marionette");
    const MovesView = require("./moves-view");
    const Radio = require("backbone.radio");
    const _ = require("underscore");
    const $ = require("jquery");

    class MovesTabView extends Mn.View {
        tagName () {
            return "div";
        }
        template () {
          return _.template($("#moves-tab-view").html());
        }
        initialize () {
            this.whiteMoves = new Backbone.Collection();
            this.blackMoves = new Backbone.Collection();
            this.movesChannel = Radio.channel("chessboardMoves");
            this.listenTo(this.movesChannel, "move", this.onMove);
        }
        onDomRefresh () {
            if (!(this.getRegions().whiteMovesRegion)) {
                this.addRegion("whiteMovesRegion", "#white-moves-region");
                this.showChildView("whiteMovesRegion", new MovesView({
                    collection: this.whiteMoves,
                }));
            }
            if (!(this.getRegions().blackMovesRegion)) {
                this.addRegion("blackMovesRegion", "#black-moves-region");
                this.showChildView("blackMovesRegion", new MovesView({
                    collection: this.blackMoves,
                }));
            }
        }
        onMove ({color, from, to}) {
            if (color === "white") {
                this.whiteMoves.push({
                    from,
                    to
                });
            }
            if (color === "black") {
                this.blackMoves.push({
                    from,
                    to,
                });
            }
        }
    }
    
    return MovesTabView;
});