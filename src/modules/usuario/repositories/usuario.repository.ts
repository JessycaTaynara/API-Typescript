import { UsuarioEntity } from "../entities/usuarioEntenty";

export interface UsuarioRepository{
    cadastroComumUsuario(usuario: UsuarioEntity):Promise<void>
    cadastroAdmUsuario(usuario: UsuarioEntity):Promise<void>
    deletar(email: string):Promise<void>
    listar():Promise<UsuarioEntity[]>
    listarUm(email: string):Promise<UsuarioEntity>
    
}