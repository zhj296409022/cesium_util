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
var provider_1 = require("./provider");
var cesium_1 = require("cesium");
var types_1 = require("./types");
var TileMapServiceProvider = /** @class */ (function (_super) {
    __extends(TileMapServiceProvider, _super);
    function TileMapServiceProvider(opts) {
        var _this = _super.call(this) || this;
        _this._options = getOptions(opts.type, opts.config);
        return _this;
    }
    Object.defineProperty(TileMapServiceProvider.prototype, "providers", {
        get: function () {
            var _this = this;
            if (this._imageryProviders.length === 0) {
                this.options.forEach(function (option) {
                    _this._imageryProviders.push(new cesium_1.TileMapServiceImageryProvider(option));
                });
            }
            return this._imageryProviders;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 添加到最顶层
     * @param viewer
     */
    TileMapServiceProvider.prototype.add = function (viewer) {
        this.providers.forEach(function (provider) {
            viewer.imageryLayers.addImageryProvider(provider);
        });
    };
    return TileMapServiceProvider;
}(provider_1.Provider));
exports.TileMapServiceProvider = TileMapServiceProvider;
function getOptions(type, config) {
    switch (type) {
        case types_1.ProviderOption.Image:
            return [config[types_1.MapType.Image], config[types_1.MapType.ImageMark]];
        case types_1.ProviderOption.OnlyImage:
            return [config[types_1.MapType.Image]];
        case types_1.ProviderOption.Street:
            return [config[types_1.MapType.Street]];
        case types_1.ProviderOption.Topo:
            return [config[types_1.MapType.Topo], config[types_1.MapType.TopoMark]];
        case types_1.ProviderOption.OnlyTopo:
            return [config[types_1.MapType.Topo]];
    }
}
exports.getOptions = getOptions;
