export class Provider<T> {
    protected _options: T[] = []
    get options() {
        return this._options
    }
}