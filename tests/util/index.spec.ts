import { calcDistanceFromCartographic } from '../../packages/util/Distance'
import { Cartographic, Ellipsoid } from 'cesium'
import chai = require('chai')

describe('工具类', function() {
    it('距离测试', function() {
        chai.expect(calcDistanceFromCartographic(new Cartographic(120.838254, 30.722023, 0), new Cartographic(120.836744, 30.721713, 0), Ellipsoid.WGS84).toFixed(0), '两点间距离')
            .equal('7671')
    })
})