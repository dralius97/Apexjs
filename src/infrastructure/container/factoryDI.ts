import { Container } from "../../core/DI/container.ts";
import { Middleware } from "../../core/middleware/middleware.ts";
import { HttpResponseFormatter } from "../HttpResponseFormatter/index.ts";
import { TYPE } from "../../domain/DI/type.ts";
import { PlaceholderUsecase } from "../../application/usecase/placeholderUsecase.ts";
import { PlaceholderController } from "../../interface/controller/placeholderController.ts";
import { ExpressAdapter } from "../../interface/http/express/adapter/index.ts";
import { PlaceholderRouter } from "../../interface/http/express/router/placeholderExpressRouter.ts";

export const binding = () => {
    const container = Container.get()
    
    container.bind(TYPE.Middleware).to(Middleware).singleton()
    container.bind(TYPE.HttpResponseFormatter).to(HttpResponseFormatter).singleton()
    container.bind(TYPE.ExpressAdapter).to(ExpressAdapter).singleton()


    container.bind(TYPE.PlaceholderUsecase).to(PlaceholderUsecase).singleton()
    container.bind(TYPE.PlaceholderController).to(PlaceholderController).singleton()
    container.bind(TYPE.PlaceholderRouter).to(PlaceholderRouter).singleton()
}
