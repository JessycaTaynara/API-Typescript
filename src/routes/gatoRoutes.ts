import { Request, Response, Router } from "express";
import { criarGatoController, deletarGatoController } from "../modules/gato";

const routes = Router()

routes
    .post("/criarGato", (req: Request, res: Response) => {
    criarGatoController.handle(req, res)
    })
    .delete("/deletarGato/:id", (req: Request, res: Response) =>{
        deletarGatoController.handle(req, res)
    })

export default routes 
