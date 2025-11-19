export const Perf = (value, context) => (...args) => {
    const start = performance.now();
    const resutl = value.apply(this, args);
    const end = performance.now();
    console.log(`${String(context.name)} executed in ${end - start}ms`);
    return resutl;
};
//# sourceMappingURL=performance.js.map