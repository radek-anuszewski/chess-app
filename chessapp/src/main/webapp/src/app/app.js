define(function (require) {
    "use strict";
    const Mn = require("backbone.marionette");
    const Backbone = require("backbone");
    const AppRouter = require("../router/app-router");
    const Application = Mn.Application.extend({
        channelName: "chessboardMoves",
        radioEvents: {
            "move": "onMove",
        },
        onMove: function (move) {
            alert(`Move: ${JSON.stringify(move)}`);
        },
    });

    const app = new Application();
    let router = undefined;

    app.on("start", function _startHistory () {
        router = new AppRouter();
        Backbone.history.start();
    });

    app.start();
});