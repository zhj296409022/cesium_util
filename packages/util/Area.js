"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Distance_1 = require("./Distance");
/**
 * 凸多边形面积计算
 * @param points
 */
function calcConvexPolygonArea(points, ellipsoid) {
    var area = 0;
    for (var i = 2; i < points.length; i++) {
        var p1 = points[i];
        var p2 = points[i - 1];
        var p3 = points[i - 2];
        var l1 = Distance_1.calcDistanceFromCartographic(p1, p2, ellipsoid);
        var l2 = Distance_1.calcDistanceFromCartographic(p2, p3, ellipsoid);
        var l3 = Distance_1.calcDistanceFromCartographic(p1, p3, ellipsoid);
        area += calcTriangleArea(l1, l2, l3);
    }
    return area;
}
exports.calcConvexPolygonArea = calcConvexPolygonArea;
/**
 * 三边求面积
 * @param l1
 * @param l2
 * @param l3
 */
function calcTriangleArea(l1, l2, l3) {
    var l = (l1 + l2 + l3) / 2;
    return Math.sqrt(l * (l - l1) * (l - l2) * (l - l3));
}
exports.calcTriangleArea = calcTriangleArea;
