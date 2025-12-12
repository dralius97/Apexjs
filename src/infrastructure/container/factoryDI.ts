import { Container } from "../../core/DI/container";
import { Middleware } from "../../core/middleware/middleware";
import { HttpResponseFormatter } from "../HttpResponseFormatter/index";
import { TYPE } from "../../domain/DI/type";
import { PlaceholderUsecase } from "../../application/usecase/placeholderUsecase";
import { PlaceholderController } from "../../interface/controller/placeholderController";
import { ExpressAdapter } from "../../interface/http/express/adapter/index";
import { PlaceholderRouter } from "../../interface/http/express/router/placeholderExpressRouter";

export const binding = () => {
    const container = Container.get()
    
    container.bind(TYPE.Middleware).to(Middleware).singleton()
    container.bind(TYPE.HttpResponseFormatter).to(HttpResponseFormatter).singleton()
    container.bind(TYPE.ExpressAdapter).to(ExpressAdapter).singleton()


    container.bind(TYPE.PlaceholderUsecase).to(PlaceholderUsecase).singleton()
    container.bind(TYPE.PlaceholderController).to(PlaceholderController).singleton()
    container.bind(TYPE.PlaceholderRouter).to(PlaceholderRouter).singleton()
}
