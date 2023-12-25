import { Response, Request } from "express";
import { DeletarGatoService } from "../services/deletar-gato.service";

export class DeletarGatoController{
    constructor(private readonly service: DeletarGatoService){}
    async handle(req: Request, res: Response):Promise<Response>{
        try {
            const id = req.params.id
            await this.service.execute(Number(id))
            return res.status(200).send({message: "Gato excluído"})

        } catch (error) {
            return res.status(500).send({message: "Erro ao deletar gato"})
        }
    }
}