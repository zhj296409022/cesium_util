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
        _this.type = types_1.ProviderOption.Image;
        _this.config = opts.config;
        _this.change(opts.type);
        return _this;
    }
    Object.defineProperty(TileMapServiceProvider.prototype, "providers", {
        get: function () {
            return this.options.map(function (option) { return new cesium_1.WebMapTileServiceImageryProvider(option); });
        },
        enumerable: true,
        configurable: true
    });
    TileMapServiceProvider.prototype.change = function (type) {
        this._options = getOptions(type, this.config);
        this.type = type;
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
