const emptyResolve = ()=>{}
const emptyReject = ()=>{}
/**
 * 异步加载判断
 */
export class Ready<T> {
    private _hasReady: boolean = false
    private _ready: Promise<T>
    private _resolve: (value?: T | PromiseLike<T>) => void = emptyResolve
    private _reject: (reason?: any)=>void = emptyReject
    constructor() {
        this._ready = new Promise<T>((resolve, reject) => {
            this._resolve = resolve
            this._reject = reject
        })

        this._init()
    }
    private async _init() {
        await this._ready

        this._hasReady = true
    }
    get ready() {
        return this._ready
    }
    get hasReady() {
        return this._hasReady
    }
    async resolve(value?: T | PromiseLike<T>) {
        this._resolve(value)
    }
    async reject(reason: any) {
        this._reject(reason)
    }
}

export class ReadyProxy<T> {
    protected _ready: Ready<T> = new Ready()
    get ready() {
        return this._ready.ready
    }
    get hasReady() {
        return this._ready.hasReady
    }
    resolve(value?: T | PromiseLike<T>) {
        this._ready.resolve(value)
    }
    reject(reason: any) {
        this._ready.reject(reason)
    }
}
