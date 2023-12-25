import { GatoEntity } from "../entities/gatoEntity";

export interface GatoRepository {
  criar(gato: GatoEntity): Promise<void>;
  deletar(id: number): Promise<void>;
  listar(): Promise<GatoEntity[]>;
  listarUm(id: number): Promise<GatoEntity>;
  atualizar(id: number, nome:string, sexo:string, raca:string, cor:string, adotado: boolean, descricao:string):Promise<void>
  adotar(id:number):Promise<void>
}
