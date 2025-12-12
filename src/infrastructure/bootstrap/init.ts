import { Container } from "../../core/DI/container";
import { ContainerCore } from "../../core/DI/containerCore";
import { Middleware } from "../../core/middleware/middleware";
import { TYPE } from "../../domain/DI/type";
import { TYPEMDW } from "../../domain/middlware/type";
import { binding } from "../container/factoryDI";
import { firstMdw } from "../middleware/firstMdw";
import { secondMdw } from "../middleware/secondMdw";

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





