import { GatoRepository } from "../repositories/gato.repository";

export class DeletarGatoService{
    constructor(private readonly repository: GatoRepository){}
    async execute(id:number): Promise<void>{
        await this.repository.deletar(id)
    }
}