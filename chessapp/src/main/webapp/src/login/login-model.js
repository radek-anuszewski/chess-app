define(function (require) {
    const Backbone = require("backbone");

    return Backbone.Model.extend({
        defaults: {
            login: undefined,
            password: undefined,
        },
    });
});