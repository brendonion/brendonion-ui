"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var _a = this.props, active = _a.active, fill = _a.fill, label = _a.label;
        return (React.createElement("div", { className: "Button " + (active
                ? fill
                    ? "active fill"
                    : "active no-fill"
                : "disabled") }, label));
    };
    Button.defaultProps = {
        label: 'World',
        active: false,
        fill: false,
    };
    return Button;
}(React.Component));
exports.default = Button;
//# sourceMappingURL=Button.js.map