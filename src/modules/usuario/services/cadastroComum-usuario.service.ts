import { usuarioDTO } from "../dtos/usuarioDTO";
import { UsuarioEntity } from "../entities/usuarioEntenty";
import { UsuarioMapping } from "../mappings/usuario.mapping";
import { UsuarioPrismaMapping } from "../mappings/usuario.prisma.mapping";
import { UsuarioRepository } from "../repositories/usuario.repository";

export class CadastroComumUsuarioService{
    constructor(private readonly repository: UsuarioRepository){}
    async execute(usuario: usuarioDTO): Promise<void>{
        const usuarioPrisma = UsuarioPrismaMapping.from(UsuarioMapping.to(usuario))
        await this.repository.cadastroComumUsuario(usuarioPrisma)       
    }
}