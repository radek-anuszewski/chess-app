define(function (require) {
    const Backbone = require("backbone");

    return Backbone.Model.extend({
        url: "http://localhost:3001/login",
        defaults: {
            login: undefined,
            password: undefined,
        },
    });
});