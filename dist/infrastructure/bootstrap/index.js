import { Container } from "../../core/DI/container.js";
import { ContainerCore } from "../../core/DI/containerCore.js";
import { TYPE } from "../../domain/DI/type.js";
import { TYPEMDW } from "../../domain/middlware/type.js";
import { Right } from "../../domain/signal/railway.js";
import { binding } from "../container/factoryDI.js";
export class Bootstrap {
    container;
    constructor() {
        this.container = new ContainerCore();
    }
    initiateContainer() {
        Container.set(this.container);
        binding();
    }
    initiateMiddleware() {
        const mdw = this.container.get(TYPE.Middleware);
        mdw.add(TYPEMDW.Base, [async () => new Right('mdw Pass')]);
    }
    bootstrap() {
        this.initiateContainer();
        this.initiateMiddleware();
    }
}
//# sourceMappingURL=index.js.map