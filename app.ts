import express from "express";
import routes from "./src/routes/routes"

const app = express()
const porta = 3000

app.use(express.json())
app.use(routes)
app.listen(porta, ()=>{
    console.log(`API rodando na porta ${porta}`)
})