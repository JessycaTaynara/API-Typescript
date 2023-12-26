import { Request, Response } from "express";
import { AtualizarGatoService } from "../services/atualizar-gato.service";
import { GatoDTO } from "../dtos/gatoDTO";

export class AtualizarGatoController{
    constructor(private readonly service: AtualizarGatoService){}
    async handle(req: Request, res: Response):Promise<Response>{
        try {
            const id = Number(req.params.id)
            const gato = <GatoDTO>req.body

            if(!id){
                return res.status(400).send({message: "Informe o id do gato"})
            }
            await this.service.execute(id, gato)
            return res.status(200).send({message: "Gato atualizado"})
        } catch (error) {
            return res.status(500).send({message: "Erro ao atualizar Gato"})
        }
    }
}