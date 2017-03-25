define(function (require) {
    const Mn = require("backbone.marionette");
    const Backbone = require("backbone");
    const AppRouter = require("../router/app-router");

    const app = new Mn.Application();
    let router = undefined;

    app.on("start", function _startHistory () {
        router = new AppRouter();
        Backbone.history.start();
        alert('started');
    });

    app.start();
});