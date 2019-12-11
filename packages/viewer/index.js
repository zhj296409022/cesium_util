"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ready_1 = require("../util/Ready");
var CesiumContext = /** @class */ (function () {
    function CesiumContext() {
        this._ready = new Ready_1.Ready();
    }
    Object.defineProperty(CesiumContext.prototype, "hasReady", {
        get: function () {
            return this._ready.hasReady;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CesiumContext.prototype, "ready", {
        get: function () {
            return this._ready.ready;
        },
        enumerable: true,
        configurable: true
    });
    CesiumContext.prototype.bind = function (viewer) {
        this._viewer = viewer;
        this._ready.resolve(viewer);
    };
    Object.defineProperty(CesiumContext.prototype, "viewer", {
        get: function () {
            if (!this._viewer) {
                throw new Error('viewer is not bind');
            }
            return this._viewer;
        },
        enumerable: true,
        configurable: true
    });
    return CesiumContext;
}());
exports.CesiumContext = CesiumContext;
