import { GatoEntity } from "../entities/gatoEntity";
import { GatoPrismaMapping } from "../mappings/gato.prisma.mapping";
import { GatoRepository } from "../repositories/gato.repository";

export class CriarGatoService{
    constructor(private readonly repository: GatoRepository){}
    async execute(gato: GatoEntity):Promise<void>{
        const gataoParaCriar = GatoPrismaMapping.from(gato)
        await this.repository.criar(gataoParaCriar)
    }
}