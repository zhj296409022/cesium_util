export enum MapType {
    Image=1,
    ImageMark=2,
    Street=4,
    Topo=8,
    TopoMark=16
}
/**
 * 上面类型的组合
 */
export enum ProviderOption {
    Image=3,
    Street=4,
    Topo=24,
    OnlyImage=1,
    OnlyTopo=8
}

export interface MapConfigMap {
    [MapType.Image]: any
    [MapType.ImageMark]: any
    [MapType.Street]: any
    [MapType.Topo]: any
    [MapType.TopoMark]: any
}

export interface TileMapConfig {
    url: string
    format?: string
    layer?: string
    style?: string
    tileMatrixSetID?: string
    subdomains?: string
    maximumLevel?: number
    minimumLevel?: number
}

export interface TileMapConfigMap {
    [MapType.Image]: TileMapConfig
    [MapType.ImageMark]: TileMapConfig
    [MapType.Street]: TileMapConfig
    [MapType.Topo]: TileMapConfig
    [MapType.TopoMark]: TileMapConfig
}