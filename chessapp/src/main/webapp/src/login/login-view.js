define(function (require) {
    const $ = require('jquery');
    const _ = require('underscore');
    const Mn = require('backbone.marionette');

    return Mn.View.extend({
        el: "#main",
        template: _.template($("#login-view").html()),
        ui: {
            login: "#login",
            password: "#password",
            form: "#login-form",
        },
        events: {
            "change @ui.login": "onLoginChange",    
            "change @ui.password": "onPasswordChange",
            "submit @ui.form": "onSubmit",
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
            alert(JSON.stringify(this.ui));
            event.preventDefault();
            if (this.model.get("login") === this.model.get("password")) {
                this.router.navigate("home", {trigger: true});
            }
            else {
                alert("Not logged!");
            }
        },
    })
});