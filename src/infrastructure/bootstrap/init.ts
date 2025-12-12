import { Container } from "../../core/DI/container.ts";
import { ContainerCore } from "../../core/DI/containerCore.ts";
import { Middleware } from "../../core/middleware/middleware.ts";
import { TYPE } from "../../domain/DI/type.ts";
import { TYPEMDW } from "../../domain/middlware/type.ts";
import { binding } from "../container/factoryDI.ts";
import { firstMdw } from "../middleware/firstMdw.ts";
import { secondMdw } from "../middleware/secondMdw.ts";

export class Bootstrap {
    private container: ContainerCore
    constructor(){
        this.container = new ContainerCore()
        this.init()
    }
    private initiateContainer(){
        Container.set(this.container)
        binding()
    }
    private initiateMiddleware(){
        const mdw = this.container.get<Middleware>(TYPE.Middleware)
        mdw.add(TYPEMDW.Base, [firstMdw,secondMdw])
        
    }
    private init(){
        this.initiateContainer()
        this.initiateMiddleware()
    }
}





