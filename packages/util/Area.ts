import { Cartesian3, Cartographic, Ellipsoid } from "cesium"
import { calcDistanceFromCartographic } from "./Distance"
/**
 * 计算三角形面积
 * @param p1 
 * @param p2 
 * @param p3 
 * @param ellipsoid 
 */
export function calcTriangleArea(p1: Cartographic, p2: Cartographic, p3: Cartographic, ellipsoid: Ellipsoid) {
    const l1 = calcDistanceFromCartographic(p1, p2, ellipsoid)

    const l2 = calcDistanceFromCartographic(p2, p3, ellipsoid)

    const l3 = calcDistanceFromCartographic(p3, p1, ellipsoid)

    const half = (l1 + l2 + l3) / 2

    return Math.sqrt(half * (half - l1)* (half - l2) * (half - l3))
}
/**
 * 拆分三角形
 * 利用三边求面积
 * @param positions 
 */
export function calcAreaFromCartesian(positions: Cartesian3[], ellipsoid: Ellipsoid) {
    if(positions.length < 3) {
        return 0
    }

    return calcAreaFromCartographic(positions.map(item=> ellipsoid.cartesianToCartographic(item)), ellipsoid)
}

export function calcAreaFromCartographic(positions: Cartographic[], ellipsoid: Ellipsoid) {
    if(positions.length < 3) {
        return 0
    }

    let area = 0

    for(let index = 2;index < positions.length; index++) {
        area += calcTriangleArea(positions[index-2], positions[index-1], positions[index], ellipsoid)
    }

    return area
}
