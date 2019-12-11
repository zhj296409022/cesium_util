import { Provider } from "./provider"
import { WebMapTileServiceImageryProvider } from "cesium"
import { ProviderOption, MapType, TileMapConfigMap, TileMapConfig } from "./types"

export class TileMapServiceProvider extends Provider<TileMapConfig> {
    config: TileMapConfigMap
    type: ProviderOption = ProviderOption.Image
    constructor(opts: { type: ProviderOption, config: TileMapConfigMap }) {
        super()

        this.config = opts.config
        this.change(opts.type)
    }
    get providers() {
        return this.options.map(option=>new WebMapTileServiceImageryProvider(option))
    }
    change(type: ProviderOption) {
        this._options = getOptions(type, this.config)

        this.type = type
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