"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MapType;
(function (MapType) {
    MapType[MapType["Image"] = 1] = "Image";
    MapType[MapType["ImageMark"] = 2] = "ImageMark";
    MapType[MapType["Street"] = 4] = "Street";
    MapType[MapType["Topo"] = 8] = "Topo";
    MapType[MapType["TopoMark"] = 16] = "TopoMark";
})(MapType = exports.MapType || (exports.MapType = {}));
/**
 * 上面类型的组合
 */
var ProviderOption;
(function (ProviderOption) {
    ProviderOption[ProviderOption["Image"] = 3] = "Image";
    ProviderOption[ProviderOption["Street"] = 4] = "Street";
    ProviderOption[ProviderOption["Topo"] = 24] = "Topo";
    ProviderOption[ProviderOption["OnlyImage"] = 1] = "OnlyImage";
    ProviderOption[ProviderOption["OnlyTopo"] = 8] = "OnlyTopo";
})(ProviderOption = exports.ProviderOption || (exports.ProviderOption = {}));
