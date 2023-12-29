import { usuarioDTO } from "../dtos/usuarioDTO";
import { CadastroComumUsuarioService } from "../services/cadastroComum-usuario.service";
import { Request, Response } from "express";

export class CadastroUsuarioComumController{
    constructor(private readonly service: CadastroComumUsuarioService){}
    async handle(req: Request, res: Response):Promise<Response>{
        try {
            const usuario = <usuarioDTO>req.body
            await this.service.execute(usuario) 
            return res.status(200).send({message: "Usuário criado com sucesso"})
        } catch (error) {
            return res.status(500).send({message: "Erro ao criar usuário comum"})
        }
    }
}