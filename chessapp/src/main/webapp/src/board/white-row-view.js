define(function (require) {
    "use strict";
    const Mn = require("backbone.marionette");
    const Backbone = require("backbone");
    const SquareView = require("./square-view");
    const _ = require("underscore");
    const characters = require("./constants/constants").characters();
    const RowOrderBehavior = require("./row-order-behavior");

    return Mn.CollectionView.extend({
        template: _.template(`<div></div><br>`),
        collection: new Backbone.Collection([
            {type: "number-left"},
            {type: "white", character: characters[0].character},
            {type: "black", character: characters[1].character},
            {type: "white", character: characters[2].character},
            {type: "black", character: characters[3].character},
            {type: "white", character: characters[4].character},
            {type: "black", character: characters[5].character},
            {type: "white", character: characters[6].character},
            {type: "black", character: characters[7].character},
            {type: "number-right"},
        ]),
        childView: SquareView,
        tagName: "section",
        behaviors: [
            {
                behaviorClass: RowOrderBehavior,
                color: "white",
            },
        ],
    });
});