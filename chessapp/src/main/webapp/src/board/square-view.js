define(function (require) {
    "use strict";
    const Mn = require("backbone.marionette");
    const _ = require("underscore");
    const Radio = require("backbone.radio");

    return Mn.View.extend({
        template: _.template(`<span></span>`),
        tagName: "p",
        initialize: function () {
            this.fieldClickedChannel = new Radio.channel("fieldClick");
        },
        events: {
            "click": "onFieldClicked",
        },
        onRender: function () {
            this.$el.css("display", "inline-block");
            this.$el.addClass(`field field-${this.model.get("type")}`);
            //TODO: replace with native button to make really accessible for
            // screen readers: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role#Keyboard_and_focus
            if (this._isChessboardField()) {
                this.$el.attr("role", "button");
                this.$el.attr("tabindex", "0");
            }
        },
        _isChessboardField: function () {
            return this.model.get("type").indexOf("number") === -1;
        },
        onFieldClicked: function () {
            if (!this._isChessboardField()) {
                return;
            }
            this.fieldClickedChannel.trigger("field:clicked", {
                clickedField: this._getClickedField(),
            });
        },
        _getClickedField: function () {
            return this.model.get("character") + this._getRowNumber();
        },
        _getRowNumber: function () {
            const id = this.$el.parent().attr("id");
            return id.substr(id.length - 1);
        },
    });
});