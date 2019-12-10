import { Provider } from "./provider"
import { TileMapServiceImageryProvider, Viewer } from "cesium"
import { ProviderOption, MapType, TileMapConfigMap, TileMapConfig } from "./types"

export class TileMapServiceProvider extends Provider<TileMapConfig> {
    constructor(opts: { type: ProviderOption, config: TileMapConfigMap }) {
        super()

        this._options = getOptions(opts.type, opts.config)
    }
    protected _imageryProviders: TileMapServiceImageryProvider[]
    get providers() {
        if(this._imageryProviders.length === 0) {
            this.options.forEach(option=> {
                this._imageryProviders.push(
                    new TileMapServiceImageryProvider(option)
                )
            })
        }

        return this._imageryProviders
    }
    /**
     * 添加到最顶层
     * @param viewer 
     */
    add(viewer: Viewer) {
        this.providers.forEach(provider=> {
            viewer.imageryLayers.addImageryProvider(provider)
        })
    }
}

export function getOptions(type: ProviderOption, config: TileMapConfigMap) {
    switch(type) {
        case ProviderOption.Image:
            return [config[MapType.Image], config[MapType.ImageMark]] 
        case ProviderOption.OnlyImage:
            return [config[MapType.Image]]
        case ProviderOption.Street:
            return [config[MapType.Street]]
        case ProviderOption.Topo:
            return [config[MapType.Topo], config[MapType.TopoMark]]
        case ProviderOption.OnlyTopo:
            return [config[MapType.Topo]]
    }
}