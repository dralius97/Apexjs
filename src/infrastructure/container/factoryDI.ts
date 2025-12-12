import { Container } from "../../core/DI/container.js";
import { Middleware } from "../../core/middleware/middleware.js";
import { HttpResponseFormatter } from "../HttpResponseFormatter/index.js";
import { TYPE } from "../../domain/DI/type.js";
import { PlaceholderUsecase } from "../../application/usecase/placeholderUsecase.js";
import { PlaceholderController } from "../../interface/controller/placeholderController.js";
import { ExpressAdapter } from "../../interface/http/express/adapter/index.js";
import { PlaceholderRouter } from "../../interface/http/express/router/placeholderExpressRouter.js";

export const binding = () => {
    const container = Container.get()
    
    container.bind(TYPE.Middleware).to(Middleware).singleton()
    container.bind(TYPE.HttpResponseFormatter).to(HttpResponseFormatter).singleton()
    container.bind(TYPE.ExpressAdapter).to(ExpressAdapter).singleton()


    container.bind(TYPE.PlaceholderUsecase).to(PlaceholderUsecase).singleton()
    container.bind(TYPE.PlaceholderController).to(PlaceholderController).singleton()
    container.bind(TYPE.PlaceholderRouter).to(PlaceholderRouter).singleton()
}
