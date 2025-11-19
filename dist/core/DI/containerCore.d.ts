import { Identifier, Provider } from "./type.js";
export declare class ContainerCore {
    private registry;
    private singleton;
    bind<T>(key: Identifier, provider: Provider<T>): void;
    get<T>(key: Identifier): T;
}
//# sourceMappingURL=containerCore.d.ts.map