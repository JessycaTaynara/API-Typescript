import {Request, Response, Router} from "express"
import { cadastroUsuarioComumController } from "../modules/usuario/"

const routes = Router()

routes 
    .post("/cadastrarUsuario", (req: Request, res: Response) => {
        cadastroUsuarioComumController.handle(req, res)
    })