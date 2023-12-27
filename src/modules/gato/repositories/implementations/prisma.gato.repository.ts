import { GatoEntity } from "../../entities/gatoEntity";
import { PrismaClient } from "@prisma/client";
import { GatoPrismaMapping } from "../../mappings/gato.prisma.mapping";
import { GatoRepository } from "../gato.repository";

export class PrismaGatoRepository implements GatoRepository{
    private prisma
    constructor(){
        this.prisma = new PrismaClient()
    }
    async criar(gato: GatoEntity):Promise<void>{
        try {
            const gatoParaCriar = GatoPrismaMapping.from(gato)
            await this.prisma.gatos_para_adotar.create({data: gatoParaCriar})
        } catch (error) {
            throw new Error("Erro ao criar gato")
        }
        
    }
    async deletar(id: number):Promise<void>{
        try {//não sei fazer funcionar, da erro pois adocoes faz referência a gatos_para_adotar
            await this.prisma.adocoes.deleteMany({ where: { id_gato: id } });
            await this.prisma.gatos_para_adotar.delete({ where: { id } });
        } catch (error) {
            console.log("foi aqui " +error)
            throw new Error(`Erro ao deletar gato - ${error}`)
        }
    }
    async listar():Promise<GatoEntity[]>{
        try {
            const gatos = await this.prisma.gatos_para_adotar.findMany()
            return gatos.map(gato => GatoPrismaMapping.to(gato))
        } catch (error) {
            throw new Error("Erro ao listar gatos")
        }
    }
    async listarUm(id: number):Promise<GatoEntity>{
        try {
            const gato = await this.prisma.gatos_para_adotar.findUniqueOrThrow({where: {id }}) 
            return GatoPrismaMapping.to(gato)
        } catch (error) {
            throw new Error("Erro ao buscar gato específico")
        }
    }
    async atualizar(id: number, gato:GatoEntity):Promise<void>{
        try {
            await this.prisma.gatos_para_adotar.update({where: {id}, data: gato})
        } catch (error) {
            throw new Error("Erro ao atualizar")
        }
    }
    async adotar(id: number):Promise<void>{
        try {
            await this.prisma.gatos_para_adotar.update({where: {id}, data: {adotado: true}})
        } catch (error) {
            throw new Error("Erro ao adotar gato")
        }
    }

}