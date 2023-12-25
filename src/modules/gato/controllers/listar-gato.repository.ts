import { Request, Response } from "express";
import { ListarGatoService } from "../services/listar-gato.service";

export class ListarGatosController{
    constructor(private readonly service: ListarGatoService){}
    async handle(req: Request, res: Response):Promise<Response>{
        try {
            const gatos = this.service.execute()
            return res.status(200).json(gatos)
        } catch (error) {
            return res.status(500).send({message: "Erro ao listar gatos"})
        }
    }
}