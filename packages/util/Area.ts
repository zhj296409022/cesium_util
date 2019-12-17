import { Cartographic, Ellipsoid } from "cesium"
import { calcDistanceFromCartographic } from "./Distance"

/**
 * 凸多边形面积计算
 * @param points 
 */
export function calcConvexPolygonArea(points: Cartographic[], ellipsoid: Ellipsoid) {
    let area = 0

    for(let i = 2; i < points.length; i++) {
        let p1 = points[i]
        let p2 = points[i - 1]
        let p3 = points[i - 2]

        let l1 = calcDistanceFromCartographic(p1, p2, ellipsoid)
        let l2 = calcDistanceFromCartographic(p2, p3, ellipsoid)
        let l3 = calcDistanceFromCartographic(p1, p3, ellipsoid)

        area += calcTriangleArea(l1, l2, l3)
    }

    return area
}
/**
 * 三边求面积
 * @param l1 
 * @param l2 
 * @param l3 
 */
export function calcTriangleArea(l1: number, l2: number, l3: number) {
    const l = (l1 + l2 + l3) / 2

    return Math.sqrt(l * (l-l1) * (l - l2) * (l - l3))
}
