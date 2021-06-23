import express from "express";
import "reflect-metadata"

import "./database"

import {router} from "./routes"

const app = express();

app.use(express.json()) // significa que estamos habilitando nossa aplicação para trabalhar com json


app.use(router)

// roda uma localhost na porta 3000 (primeiro parâmetro)
app.listen(3000, () => console.log("server is running"))
