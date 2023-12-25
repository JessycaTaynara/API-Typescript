import { GatoEntity } from "../entities/gatoEntity";

export interface GatoRepository {
  criar(gato: GatoEntity): Promise<void>;
  deletar(id: number): Promise<void>;
  listar(): Promise<GatoEntity[]>;
  listarUm(id: number): Promise<GatoEntity>;
  atualizar(id: number, gato:GatoEntity):Promise<void>
  adotar(id:number):Promise<void>
}
