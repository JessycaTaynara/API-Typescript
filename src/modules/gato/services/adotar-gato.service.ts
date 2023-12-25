import { GatoRepository } from "../repositories/gato.repository";

export class AdotarGatoService{
    constructor(private readonly repository: GatoRepository){}
    async execute(id:number): Promise<void>{
        await this.repository.adotar(id)
    }
}