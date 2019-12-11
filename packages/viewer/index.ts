import { Viewer } from 'cesium'
import { Ready } from '../util/Ready'

export class CesiumContext {
    protected _ready: Ready<Viewer> = new Ready()
    private _viewer?: Viewer
    get hasReady() {
        return this._ready.hasReady
    }
    get ready() {
        return this._ready.ready
    }
    bind(viewer: Viewer) {
        this._viewer = viewer

        this._ready.resolve(viewer)
    }
    get viewer() {
        if(!this._viewer) {
            throw new Error('viewer is not bind')
        }

        return this._viewer
    }
}
