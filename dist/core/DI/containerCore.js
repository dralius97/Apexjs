export class ContainerCore {
    registry = new Map();
    singleton = new Map();
    bind(key, provider) {
        if (this.registry.has(key))
            throw new Error('provider cannot bind more than one with same name');
        this.registry.set(key, provider);
    }
    get(key) {
        if (!this.registry.has(key))
            throw new Error(`provider not found: ${String(key)}`);
        const prov = this.registry.get(key);
        if (prov.singleton && this.singleton.has(key))
            return this.singleton.get(key);
        const instance = new prov.instance();
        if (prov.singleton)
            this.singleton.set(key, instance);
        return instance;
    }
}
//# sourceMappingURL=containerCore.js.map