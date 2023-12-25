import { GatoDTO } from "../dtos/gatoDTO";
import { CriarGatoService } from "../services/criar-gato.service";
import { Request, Response } from "express";

export class CriarGatoController{
    constructor(private readonly service: CriarGatoService){}
    async handle(req: Request, res: Response): Promise<Response>{
        const gato = <GatoDTO>req.body
        try {
            await this.service.execute(gato)
            return res.status(200).send({message: "Gato criado"})
        } catch (error) {
            return res.status(500).send({message: "Erro ao criar gato"})
        }
        
    }
}