"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Provider = /** @class */ (function () {
    function Provider() {
        this._options = [];
    }
    Object.defineProperty(Provider.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    return Provider;
}());
exports.Provider = Provider;
