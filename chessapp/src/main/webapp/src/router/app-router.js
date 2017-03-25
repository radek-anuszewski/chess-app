define(function (require) {
    const Mn = require("backbone.marionette");
    const LoginView = require("../login/login-view");
    const HomeView = require("../home/home-view");
    const LoginModel = require("../login/login-model");

    return Mn.AppRouter.extend({
        routes: {
            "": "login",
            "home": "home"
        },
        login: function () {
            const loginView = new LoginView({
                model: new LoginModel(this),
                router: this,
            });
            loginView.render();
        },
        home: function () {
            const homeView = new HomeView({

            });
            homeView.render();
        }
    });
});