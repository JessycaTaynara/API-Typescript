import { UsuarioEntity } from "../../entities/usuarioEntenty";
import { UsuarioRepository } from "../usuario.repository";
import { UsuarioPrismaMapping } from "../../mappings/usuario.prisma.mapping";
import { PrismaClient } from "@prisma/client";
export class PrismaUsuarioRepository implements UsuarioRepository{
    private prisma
    constructor(){
        this.prisma = new PrismaClient()
    }
    async cadastroComumUsuario(usuario: UsuarioEntity):Promise<void>{
        const usuarioParaCadastrar = UsuarioPrismaMapping.from(usuario)
        try {
            await this.prisma.usuarios.create({data: usuarioParaCadastrar})
        } catch (error) {
            throw new Error("Erro ao cadastrar usuário comum")
        }
    }
    async cadastroAdmUsuario(usuario: UsuarioEntity): Promise<void> {
        try {
            const usuarioAdm = UsuarioPrismaMapping.from(usuario)
            await this.prisma.usuarios.create({data: usuarioAdm})
        } catch (error) {
           throw new Error("Erro ao criar usuário administrador") 
        }
        
    }
    async deletar(email: string): Promise<void> {
        try {
            await this.prisma.usuarios.delete({where: {email}})
        } catch (error) {
            throw new Error("Erro ao deletar usuário")
        }
    }
    async listar(): Promise<UsuarioEntity[]> {
        try {
            const usuarios = await this.prisma.usuarios.findMany()
            return usuarios.map(usuarios => UsuarioPrismaMapping.to(usuarios))
        } catch (error) {
            throw new Error("Erro ao listar usuários")
        }
    }
    async listarUm(email: string): Promise<UsuarioEntity> {
        try {
            const usuario = await this.prisma.usuarios.findUniqueOrThrow({where: {email}})
            return UsuarioPrismaMapping.to(usuario)
        } catch (error) {
            throw new Error("Erro ao listar este usuário")
        }
    }
}