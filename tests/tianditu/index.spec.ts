import chai = require('chai')

import { ProviderOption, MapType } from '../../packages/providers/types'
import { Config } from '../../packages/providers/tianditu/config'
import { getOptions } from '../../packages/providers/TileMapServiceProvider'
import { TiandituProvider } from '../../packages/providers/tianditu'

describe('天地图测试', ()=> {
    it('测试类型', function() {
        const options = getOptions(ProviderOption.Image, Config)

        chai.expect(options[0], '卫星图').equal(Config[MapType.Image], '')
        chai.expect(options[1], '卫星图标注').equal(Config[MapType.ImageMark], '')
    })

    it('初始化provider', function() {
        const provider = new TiandituProvider({
            type: ProviderOption.Image,
            tKey: 'testtest',
            hostSign: false
        })

        chai.expect(provider.options[0].url.indexOf('testtest') === -1, '替换的key').eq(false)
    })
})