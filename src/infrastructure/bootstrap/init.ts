import { Container } from "../../core/DI/container.js";
import { ContainerCore } from "../../core/DI/containerCore.js";
import { Middleware } from "../../core/middleware/middleware.js";
import { TYPE } from "../../domain/DI/type.js";
import { TYPEMDW } from "../../domain/middlware/type.js";
import { binding } from "../container/factoryDI.js";
import { firstMdw } from "../middleware/firstMdw.js";
import { secondMdw } from "../middleware/secondMdw.js";

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





