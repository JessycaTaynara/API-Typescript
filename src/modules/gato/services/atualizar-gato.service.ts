import { GatoDTO } from "../dtos/gatoDTO";
import { GatoEntity } from "../entities/gatoEntity";
import { GatoMapping } from "../mappings/gato.mapping";
import { GatoRepository } from "../repositories/gato.repository";

export class AtualizarGatoService{
    constructor(private readonly repository: GatoRepository){}
    async execute(id: number, gato:GatoDTO):Promise<void>{
        const gatoParaAtulizar = GatoMapping.from(gato)
        await this.repository.atualizar(id, gatoParaAtulizar)
    }
}