import rotasDoGato from "../routes/gatoRoutes"
import { Router } from "express"

const routes = Router()

routes.use(rotasDoGato)

export default routes
