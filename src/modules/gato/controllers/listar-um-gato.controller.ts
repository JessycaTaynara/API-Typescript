import { Request, Response } from "express";
import { ListarUmGatoService } from "../services/listar-um-gato.service";

export class ListarUmGatoController{
    constructor(private readonly service: ListarUmGatoService){}
    async handle(request: Request, response: Response):Promise<Response>{
        const id = Number(request.params.id)

        if(!id){
            return response.status(400).send({message: "informe o id do gato"})
        }

        try {
            const gato = await this.service.execute(id)
            return response.status(200).json(gato)
        } catch (error) {
            return response.status(500).send({message: "Erro ao listar este ato"})
        }
    }
}