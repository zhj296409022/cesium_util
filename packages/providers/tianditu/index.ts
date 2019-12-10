import { ProviderOption } from "../types"
import { TileMapServiceProvider } from "../TileMapServiceProvider"
import { Config } from "./config"
/**
 * 提供天地图的底图
 */
export class TiandituProvider extends TileMapServiceProvider {
    /**
     * 
     * @param opts 
     */
    constructor(opts: { 
        type: ProviderOption, 
        tKey: string, 
        /**
         * 加上域名和端口的后缀，防止跨域产生的缓存导致其他网页读取该url时会发生跨域的情况
         */
        hostSign: boolean }) {
        super({
            type: opts.type,
            config: Config
        })

        this._options.forEach(option => {
            option.url = option.url.replace('{key}', opts.tKey)

            if(opts.hostSign) {
                option.url += `&host=${window.location.host}`
            }
            
            return option
        })
    }
}