import { GatoEntity } from "../entities/gatoEntity";
import { GatoPrismaMapping } from "../mappings/gato.prisma.mapping";
import { GatoRepository } from "../repositories/gato.repository";

export class ListarUmGatoService{
    constructor(private readonly repository: GatoRepository){}
    async execute(id: number):Promise<GatoEntity>{
        const gato = await this.repository.listarUm(id)
        return GatoPrismaMapping.to(gato)
    }
}