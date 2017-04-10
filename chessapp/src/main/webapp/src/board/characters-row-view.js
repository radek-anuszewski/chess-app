define(function (require) {
    "use strict";
    const Mn = require("backbone.marionette");
    const Backbone = require("backbone");
    const CharacterView = require("./character-view");
    const emptyElement = {character: " "};
    const _ = require("underscore");
    const characters = [
        {character: "a"},
        {character: "b"},
        {character: "c"},
        {character: "d"},
        {character: "e"},
        {character: "f"},
        {character: "g"},
        {character: "h"},
    ];

    return Mn.CollectionView.extend({
        template: _.template(`<div></div><br>`),
        collection: new Backbone.Collection([
            emptyElement,
            ...characters,
            emptyElement,
        ]),
        childView: CharacterView,
        tagName: "section",
    });
});