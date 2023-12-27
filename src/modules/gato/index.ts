import { PrismaGatoRepository } from "./repositories/implementations/prisma.gato.repository";

import { CriarGatoService } from "./services/criar-gato.service";
import { CriarGatoController } from "./controllers/criar-gato.controller";
import { DeletarGatoService } from "./services/deletar-gato.service";
import { DeletarGatoController } from "./controllers/deletar-gato.controller";
import { ListarGatoService } from "./services/listar-gato.service";
import { ListarGatosController } from "./controllers/listar-gato.controller";
import { ListarUmGatoService } from "./services/listar-um-gato.service";
import { ListarUmGatoController } from "./controllers/listar-um-gato.controller";
import { AdotarGatoService } from "./services/adotar-gato.service";
import { AdotarGatoController } from "./controllers/adotar-gato-controller";
import { AtualizarGatoService } from "./services/atualizar-gato.service";
import { AtualizarGatoController } from "./controllers/atualiza-gato.controller";

const repository = new PrismaGatoRepository()

const criarGatoService = new CriarGatoService(repository)
const criarGatoController = new CriarGatoController(criarGatoService)

const deletarGatoService = new DeletarGatoService(repository)
const deletarGatoController = new DeletarGatoController(deletarGatoService)

const listarGatoService = new ListarGatoService(repository)
const listarGatosController = new ListarGatosController(listarGatoService)

const listarUmGatoService = new ListarUmGatoService(repository)
const listarUmGatosController = new ListarUmGatoController(listarUmGatoService)

const adotarGatoService = new AdotarGatoService(repository)
const adotarGatoController = new AdotarGatoController(adotarGatoService)

const atualizarGatoService = new AtualizarGatoService(repository)
const atualizarGatoController = new AtualizarGatoController(atualizarGatoService)

export {criarGatoController, deletarGatoController, listarGatosController, listarUmGatosController, adotarGatoController, atualizarGatoController}
