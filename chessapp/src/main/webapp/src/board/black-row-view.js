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
            {type: "black", character: characters[0].character},
            {type: "white", character: characters[1].character},
            {type: "black", character: characters[2].character},
            {type: "white", character: characters[3].character},
            {type: "black", character: characters[4].character},
            {type: "white", character: characters[5].character},
            {type: "black", character: characters[6].character},
            {type: "white", character: characters[7].character},
            {type: "number-right"},
        ]),
        childView: SquareView,
        tagName: "section",
        behaviors: [
            {
                behaviorClass: RowOrderBehavior,
                color: "black",
            },
        ],
    });
});