import { Request, Response, Router } from "express";
import { adotarGatoController, atualizarGatoController, criarGatoController, deletarGatoController, listarGatosController, listarUmGatosController } from "../modules/gato";

const routes = Router()

routes
    .post("/criarGato", (req: Request, res: Response) => {
        criarGatoController.handle(req, res)
    })
    .delete("/deletarGato/:id", (req: Request, res: Response) =>{
        deletarGatoController.handle(req, res)
    })
    .get("/gatos", (req: Request, res: Response)=>{
        listarGatosController.handle(req, res)
    })
    .get("/gato/:id", (req: Request, res: Response)=>{
        listarUmGatosController.handle(req, res)
    })
    .put("/adotarGato/:id", (req: Request, res: Response)=>{
        adotarGatoController.handle(req, res)
    })
    .put("/atualizarGato/:id", (req: Request, res: Response)=>{
        atualizarGatoController.handle(req, res)
    })

export default routes 
