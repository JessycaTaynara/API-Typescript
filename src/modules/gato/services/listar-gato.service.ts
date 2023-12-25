import { GatoEntity } from "../entities/gatoEntity";
import { GatoPrismaMapping } from "../mappings/gato.prisma.mapping";
import { GatoRepository } from "../repositories/gato.repository";

export class ListarGatoService{
    constructor(private readonly respository: GatoRepository){}
    async execute():Promise<GatoEntity[]>{
        const gatos = await this.respository.listar()
        return gatos.map(gato => GatoPrismaMapping.to(gato))
    }

}