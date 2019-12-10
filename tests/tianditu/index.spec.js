"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var types_1 = require("../../packages/providers/types");
var config_1 = require("../../packages/providers/tianditu/config");
var TileMapServiceProvider_1 = require("../../packages/providers/TileMapServiceProvider");
var tianditu_1 = require("../../packages/providers/tianditu");
describe('天地图测试', function () {
    it('测试类型', function () {
        var options = TileMapServiceProvider_1.getOptions(types_1.ProviderOption.Image, config_1.Config);
        chai.expect(options[0], '卫星图').equal(config_1.Config[types_1.MapType.Image], '');
        chai.expect(options[1], '卫星图标注').equal(config_1.Config[types_1.MapType.ImageMark], '');
    });
    it('初始化provider', function () {
        var provider = new tianditu_1.TiandituProvider({
            type: types_1.ProviderOption.Image,
            tKey: 'testtest',
            hostSign: false
        });
        chai.expect(provider.options[0].url.indexOf('testtest') === -1, '替换的key').eq(false);
    });
});
