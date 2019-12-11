"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cesium_1 = require("cesium");
/**
 * 移除除canvas外cesium的所有控件
 */
function removeControls() {
    var credit = document.createElement('div');
    return {
        animation: false,
        baseLayerPicker: false,
        fullscreenButton: false,
        homeButton: false,
        infoBox: false,
        sceneModePicker: false,
        selectionIndicator: false,
        timeline: false,
        navigationHelpButton: false,
        imageryProvider: undefined,
        navigationInstructionsInitiallyVisible: false,
        creditContainer: credit,
        creditViewport: credit,
        geocoder: false
    };
}
exports.removeControls = removeControls;
/**
 * 创建空viewer,不会覆盖options的属性
 * @param container
 * @param options
 */
function createViewer(container, options) {
    if (options === void 0) { options = {}; }
    var opt = removeControls();
    Object.assign(opt, options);
    return new cesium_1.Viewer(container, opt);
}
exports.createViewer = createViewer;
