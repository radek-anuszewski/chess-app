define(function (require) {
    const Mn = require("backbone.marionette");
    const Backbone = require("backbone");
    const CharacterView = require("./character-view");

    return Mn.CollectionView.extend({
        template: _.template(`<div></div><br>`),
        collection: new Backbone.Collection([
            {character: 'a'},
            {character: 'b'},
            {character: 'c'},
            {character: 'd'},
            {character: 'e'},
            {character: 'f'},
            {character: 'g'},
            {character: 'h'},
        ]),
        childView: CharacterView,
        tagName: 'section',
    });
});