import express, { Router }  from "express";
import { Inject } from "../../../../core/DI/decorator";
import { TYPE } from "../../../../domain/DI/type";
import { ExpressAdapter } from "../adapter";
import { PlaceholderController } from "../../../controller/placeholderController";

export class PlaceholderRouter {
    @Inject(TYPE.ExpressAdapter) private adapter!: ExpressAdapter 
    @Inject(TYPE.PlaceholderController) private placeholderController!: PlaceholderController
    private router: Router
    constructor(){
        this.router = express.Router()
        this.init()
    }
    private init = () => {
        this.router.post('/palindrome', this.adapter.call(this.placeholderController.checkPalindrome))
    }
    exec = () => {
        return this.router
    }
}