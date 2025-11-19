import { Container } from "../../core/DI/container.js";
import { ContainerCore } from "../../core/DI/containerCore.js";
import { Middleware } from "../../core/middleware/middleware.js";
import { TYPE } from "../../domain/DI/type.js";
import { TYPEMDW } from "../../domain/middlware/type.js";
import { Right } from "../../domain/signal/railway.js";
import { binding } from "../container/factoryDI.js";

export class Bootstrap {
    private container: ContainerCore
    constructor(){
        this.container = new ContainerCore()
    }
    private initiateContainer(){
        Container.set(this.container)
        binding()
    }
    private initiateMiddleware(){
        const mdw = this.container.get<Middleware>(TYPE.Middleware)
        mdw.add(TYPEMDW.Base, [async ()=> new Right('mdw Pass')])
    }
    public bootstrap(){
        this.initiateContainer()
        this.initiateMiddleware()
    }
}





