import { usuarios } from "@prisma/client";
import { UsuarioEntity } from "../entities/usuarioEntenty";

export class UsuarioPrismaMapping{
    static to(usuario: usuarios):UsuarioEntity{
        return {
            nome: usuario.nome,
            email: usuario.email,
            senha: usuario.senha,
            tipo: usuario.tipo
        }
    }
    static from(usuario: UsuarioEntity): usuarios{
        return{
            nome: usuario.nome,
            email: usuario.email,
            senha: usuario.senha,
            tipo: usuario.tipo
        }
    }
}