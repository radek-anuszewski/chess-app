define(function (require) {
    const $ = require('jquery');
    const _ = require('underscore');
    const Mn = require('backbone.marionette');

    const ErrorView = Mn.View.extend({
    });

    return Mn.View.extend({
        el: "#main",
        template: _.template($("#login-view").html()),
        ui: {
            login: "#login",
            password: "#password",
            form: "#login-form",
        },
        regions: {
            loginInvalid: "#login-invalid",
            passwordInvalid: "#password-invalid",
        },
        events: {
            "keyup @ui.login": "onLoginChange",
            "keyup @ui.password": "onPasswordChange",
            "submit @ui.form": "onSubmit",
        },
        modelEvents: {
            "change:login": "onLoginModelChange",
            "change:password": "onPasswordModelChange",
            "invalid": "onValidationFailed",
        },
        onLoginModelChange: function () {
            this.detachChildView("loginInvalid");
        },
        onPasswordModelChange: function () {
            this.detachChildView("passwordInvalid");
        },
        onValidationFailed: function () {
            const errors = this.model.validationError;
            if (errors.login) {
                this.showChildView("loginInvalid", new ErrorView({
                    template: _.template(errors.login.message),
                }));
            }
            if (errors.password) {
                this.showChildView("passwordInvalid", new ErrorView({
                    template: _.template(errors.password.message),
                }));
            }
        },
        initialize: function ({router}) {
            this.router = router;
        },
        onLoginChange: function (event) {
            this.model.set({login: this.ui.login.val()});
        },
        onPasswordChange: function (event) {
            this.model.set({password: this.ui.password.val()});
        },
        onSubmit: function (event) {
            event.preventDefault();
            if (this.model.isValid()) {
                this.model.save().then(_onLoginRequest.bind(this));
            }
            function _onLoginRequest (response) {
                if (response.logged) {
                    this.router.navigate("home", {trigger: true});
                }
                else {
                    alert('Not logged!');
                }
            }
        },
    })
});