import { usuarioDTO } from "../dtos/usuarioDTO";
import { UsuarioEntity } from "../entities/usuarioEntenty";

export class UsuarioMapping{
    static to(usuario: usuarioDTO): UsuarioEntity{
        return {
            nome: usuario.nome,
            email: usuario.email,
            senha: usuario.senha,
            tipo: usuario.tipo == null? "comum" : usuario.tipo
        }
    }
}