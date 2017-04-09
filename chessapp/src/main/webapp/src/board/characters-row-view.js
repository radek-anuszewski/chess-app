define(function (require) {
    const Mn = require("backbone.marionette");
    const Backbone = require("backbone");
    const CharacterView = require("./character-view");
    const emptyElement = {character: ' '};

    return Mn.CollectionView.extend({
        template: _.template(`<div></div><br>`),
        collection: new Backbone.Collection([
            emptyElement,
            {character: 'a'},
            {character: 'b'},
            {character: 'c'},
            {character: 'd'},
            {character: 'e'},
            {character: 'f'},
            {character: 'g'},
            {character: 'h'},
            emptyElement,
        ]),
        childView: CharacterView,
        tagName: 'section',
    });
});