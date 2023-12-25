import { GatoDTO } from "../dtos/gatoDTO";
import { GatoEntity } from "../entities/gatoEntity";

export class GatoMapping {
  static from(gato: GatoDTO): GatoEntity {
    return {
      nome: gato.nome,
      sexo: gato.sexo,
      raca: gato.raca,
      cor: gato.cor,
      adotado: gato.adotado,
      descricao: gato.descricao,
      id: gato.id,
    };
  }
}
