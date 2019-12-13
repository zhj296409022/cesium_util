"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cesium_1 = require("cesium");
/**
 * 球面距
 * @param c1
 * @param c2
 * @param ellipsoid
 */
function calcDistanceFromCartesian3(c1, c2, ellipsoid) {
    var p1 = ellipsoid.cartesianToCartographic(c1);
    var p2 = ellipsoid.cartesianToCartographic(c2);
    return calcDistanceFromCartographic(p1, p2, ellipsoid);
}
exports.calcDistanceFromCartesian3 = calcDistanceFromCartesian3;
/**
 * 球面距
 * @param p1
 * @param p2
 * @param ellipsoid
 */
function calcDistanceFromCartographic(p1, p2, ellipsoid) {
    var geodesic = new cesium_1.EllipsoidGeodesic(p1, p2, ellipsoid);
    var s = geodesic.surfaceDistance;
    s = Math.sqrt(Math.pow(s, 2) + Math.pow(p1.height - p2.height, 2));
    return s;
}
exports.calcDistanceFromCartographic = calcDistanceFromCartographic;
