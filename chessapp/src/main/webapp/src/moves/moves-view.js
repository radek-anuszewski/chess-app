define(function (require) {
    "use strict";
    const Mn = require("backbone.marionette");
    const MoveView = require("./move-view");
    const _ = require("underscore");
    return Mn.CollectionView.extend({
        template: _.template(`<div></div>`),
        tagName: "section",
        childView: MoveView,
    });
});