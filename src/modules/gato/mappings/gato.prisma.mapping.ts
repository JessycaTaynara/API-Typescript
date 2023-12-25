import { gatos_para_adotar } from "@prisma/client";
import { GatoEntity } from "../entities/gatoEntity";
export class GatoPrismaMapping {
  static to(gato: gatos_para_adotar): GatoEntity {
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
  static from(gato: GatoEntity): gatos_para_adotar {
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
