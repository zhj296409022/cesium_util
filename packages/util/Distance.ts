import { Cartesian3, Ellipsoid , EllipsoidGeodesic, Cartographic} from 'cesium'
/**
 * 球面距
 * @param c1 
 * @param c2 
 * @param ellipsoid 
 */
export function calcDistanceFromCartesian3(c1: Cartesian3, c2: Cartesian3, ellipsoid: Ellipsoid) {
    const p1 = ellipsoid.cartesianToCartographic(c1)
    const p2 = ellipsoid.cartesianToCartographic(c2)

    return calcDistanceFromCartographic(p1, p2, ellipsoid)
}
/**
 * 球面距
 * @param p1 
 * @param p2 
 * @param ellipsoid 
 */
export function calcDistanceFromCartographic(p1: Cartographic, p2: Cartographic, ellipsoid: Ellipsoid) {
    const geodesic = new EllipsoidGeodesic(p1, p2, ellipsoid)

    var s = geodesic.surfaceDistance

    s = Math.sqrt(Math.pow(s, 2) + Math.pow(p1.height - p2.height, 2))

    return s
}
