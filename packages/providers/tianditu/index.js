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
var TileMapServiceProvider_1 = require("../TileMapServiceProvider");
var config_1 = require("./config");
/**
 * 提供天地图的底图
 */
var TiandituProvider = /** @class */ (function (_super) {
    __extends(TiandituProvider, _super);
    /**
     *
     * @param opts
     */
    function TiandituProvider(opts) {
        var _this = _super.call(this, {
            type: opts.type,
            config: config_1.Config
        }) || this;
        _this._options.forEach(function (option) {
            option.url = option.url.replace('{key}', opts.tKey);
            if (opts.hostSign) {
                option.url += "&host=" + window.location.host;
            }
            return option;
        });
        return _this;
    }
    return TiandituProvider;
}(TileMapServiceProvider_1.TileMapServiceProvider));
exports.TiandituProvider = TiandituProvider;
