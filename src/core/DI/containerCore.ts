import { Identifier, Provider } from "./type.js";


export class ContainerCore{
    private registry = new Map<Identifier, Provider<unknown>>();
    private singleton = new Map<Identifier, unknown>();

    public bind<T>(key: Identifier, provider: Provider<T>){
        if(this.registry.has(key)) throw new Error('provider cannot bind more than one with same name')
        this.registry.set(key, provider)
    }
    public get<T>(key:Identifier): T {
        if(!this.registry.has(key)) throw new Error(`provider not found: ${String(key)}`)
        const prov = this.registry.get(key)
        if(prov!.singleton && this.singleton.has(key)) return this.singleton.get(key) as T
        const instance = new (prov!.instance as { new (): unknown })()
        if(prov!.singleton) this.singleton.set(key, instance)
        return instance as T
    }
}

