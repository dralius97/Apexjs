class Container {
    static container = null;
    static set(instance) {
        this.container = instance;
    }
    static get() {
        if (!this.container)
            throw new Error("Container belum diinisialisasi");
        return this.container;
    }
}
export { Container };
//# sourceMappingURL=container.js.map