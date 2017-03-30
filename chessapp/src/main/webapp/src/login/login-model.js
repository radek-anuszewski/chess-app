define(function (require) {
    const Backbone = require("backbone");

    return Backbone.Model.extend({
        validate: function (attrs, options) {
            const validationErrors = {};
            if ((!(attrs.login && attrs.login.length)) || (attrs.login.length < this.loginMinLength)) {
                validationErrors.login = {
                    error: `min`,
                    message: `Login should contain at least ${this.loginMinLength} characters`,
                };
            }
            if ((!(attrs.password && attrs.password.length)) || (attrs.password.length < this.passwordMinLength)) {
                validationErrors.password = {
                    error: `min`,
                    message: `Password should contain at least ${this.passwordMinLength} characters`,
                };
            }
            return (validationErrors.login || validationErrors.password) ? validationErrors : undefined;
        },
        initialize: function ({loginMinLength, passwordMinLength}) {
            this.loginMinLength = loginMinLength;
            this.passwordMinLength = passwordMinLength;
        },
        url: "http://localhost:3001/login",
        defaults: {
            login: undefined,
            password: undefined,
        },
    });
});