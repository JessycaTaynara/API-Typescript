import { Request, Response } from "express";
import { ListarGatoService } from "../services/listar-gato.service";

export class ListarGatosController{
    constructor(private readonly service: ListarGatoService){}
    async handle(req: Request, res: Response):Promise<Response>{
        try {
            const gatos = await this.service.execute()
            if(gatos.length === 0){
                return res.status(404).send({message: "Não há gatos cadastrados"})
            }
            return res.status(200).json(gatos)
        } catch (error) {
            return res.status(500).send({message: "Erro ao listar gatos"})
        }
    }
}