"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
exports.Config = (_a = {},
    _a[types_1.MapType.Image] = {
        url: 'https://t{s}.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE={style}&TILEMATRIXSET={TileMatrixSet}&FORMAT=tiles&TILEMATRIX={TileMatrix}&TILEROW={TileRow}&TILECOL={TileCol}&tk=${key}',
        format: 'tiles',
        layer: 'img',
        style: 'default',
        tileMatrixSetID: 'w',
        subdomains: '01234567',
        maximumLevel: 18
    },
    _a[types_1.MapType.ImageMark] = {
        url: 'https://t{s}.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE={style}&TILEMATRIXSET={TileMatrixSet}&FORMAT=tiles&TILEMATRIX={TileMatrix}&TILEROW={TileRow}&TILECOL={TileCol}&tk={key}',
        format: 'tiles',
        layer: 'img',
        style: 'default',
        tileMatrixSetID: 'w',
        subdomains: '01234567',
        maximumLevel: 18
    },
    _a[types_1.MapType.Street] = {
        url: 'https://t{s}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE={style}&TILEMATRIXSET={TileMatrixSet}&FORMAT=tiles&TILEMATRIX={TileMatrix}&TILEROW={TileRow}&TILECOL={TileCol}&tk={key}',
        format: 'tiles',
        layer: 'img',
        style: 'default',
        tileMatrixSetID: 'w',
        subdomains: '01234567',
        maximumLevel: 21
    },
    _a[types_1.MapType.Topo] = {
        url: 'https://t{s}.tianditu.gov.cn/ter_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ter&STYLE={style}&TILEMATRIXSET={TileMatrixSet}&FORMAT=tiles&TILEMATRIX={TileMatrix}&TILEROW={TileRow}&TILECOL={TileCol}&tk={key}',
        format: 'tiles',
        layer: 'img',
        style: 'default',
        tileMatrixSetID: 'w',
        subdomains: '01234567',
        maximumLevel: 21
    },
    _a[types_1.MapType.TopoMark] = {
        url: 'https://t{s}.tianditu.gov.cn/cta_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cta&STYLE={style}&TILEMATRIXSET={TileMatrixSet}&FORMAT=tiles&TILEMATRIX={TileMatrix}&TILEROW={TileRow}&TILECOL={TileCol}&tk={key}',
        format: 'tiles',
        layer: 'img',
        style: 'default',
        tileMatrixSetID: 'w',
        subdomains: '01234567',
        maximumLevel: 21
    },
    _a);
