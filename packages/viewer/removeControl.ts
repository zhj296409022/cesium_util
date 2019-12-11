import { Viewer } from "cesium"

/**
 * 移除除canvas外cesium的所有控件
 */
export function removeControls() {
    const credit = document.createElement('div')
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
    }
}
/**
 * 创建空viewer,不会覆盖options的属性
 * @param container 
 * @param options 
 */
export function createViewer(container: Element | string, options={}) {
    const opt = removeControls()

    Object.assign(opt, options)

    return new Viewer(container, opt)
}
