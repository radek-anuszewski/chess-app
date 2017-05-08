define(function (require) {
    "use strict";
    const Mn = require("backbone.marionette");
    const _ = require("underscore");
    const Radio = require("backbone.radio");
    const $ = require("jquery");

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
                setTimeout(this._drawChessPiecesInUglyWay.bind(this), 0);
            }
        },
        _drawChessPiecesInUglyWay: function () {
            const rowNumber = this._getRowNumber();
            const elements = this.$el.parent().find("p");
            Array.from(elements).forEach(function bindIdInUglyWay(element, index) {
                $(element).attr("id", rowNumber + "_" + index);
            });
            this._drawWhiteChessPiecesInUglyWay();
            this._drawBlackChessPiecesInUglyWay();
        },
        _drawWhiteChessPiecesInUglyWay: function () {
            const whiteFigures = [
                "&#9814;",
                "&#9816;",
                "&#9815;",
                "&#9813;",
                "&#9812;",
                "&#9815;",
                "&#9816;",
                "&#9814;",
            ];
            const rowNumber = this._getRowNumber();
            if (Number(rowNumber) === 8) {
                const fieldNumber = this._getFieldNumber() - 1;
                this.$el.find("span").html(whiteFigures[fieldNumber]);
            }
            if (Number(rowNumber) === 7) {
                this.$el.find("span").html("&#9817;");
            }
        },
        _drawBlackChessPiecesInUglyWay: function () {
            const blackFigures = [
                "&#9820;",
                "&#9822;",
                "&#9821;",
                "&#9819;",
                "&#9818;",
                "&#9821;",
                "&#9822;",
                "&#9820;",
            ];
            const rowNumber = this._getRowNumber();
            if (Number(rowNumber) === 2) {
                this.$el.find("span").html("&#9823;");
            }
            if (Number(rowNumber) === 1) {
                const fieldNumber = this._getFieldNumber() - 1;
                this.$el.find("span").html(blackFigures[fieldNumber]);
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
        _getFieldNumber: function () {
            const id = this.$el.attr("id");
            return Number(id.substr(id.length - 1));
        },
    });
});