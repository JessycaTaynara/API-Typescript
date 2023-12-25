import { Request, Response } from "express";
import { AdotarGatoService } from "../services/adotar-gato.service";

export class AdotarGatoController{
    constructor(private readonly service: AdotarGatoService){}
    async handle(req: Request, res: Response):Promise<Response>{
        try {
            const id = Number(req.params.id)

            if(!id){
                return res.status(400).send({message: "Informe o id do gato"})
            }   

            await this.service.execute(id)
            return res.status(200).send({message: "Gato Adotado!"})
        } catch (error) {
            return res.status(500).send({message: "Erro ao adotar gato"})
        }
    }
}