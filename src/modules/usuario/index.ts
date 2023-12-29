import { PrismaUsuarioRepository } from "./repositories/implementations/prisma.usuario.repository";

import { CadastroComumUsuarioService } from "./services/cadastroComum-usuario.service";
import { CadastroUsuarioComumController } from "./controllers/cadastro-usuarioComum.controller";

const repository = new PrismaUsuarioRepository()

const cadastroComumUsuarioService = new CadastroComumUsuarioService(repository)
const cadastroUsuarioComumController = new CadastroUsuarioComumController(cadastroComumUsuarioService)

export {
    cadastroUsuarioComumController
}