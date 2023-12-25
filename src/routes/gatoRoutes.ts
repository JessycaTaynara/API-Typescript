import { Request, Response, Router } from "express";
import { criarGatoController } from "../modules/gato";

const routes = Router()

routes.post("/criarGato", (req: Request, res: Response) => {
    criarGatoController.handle(req, res)
})
