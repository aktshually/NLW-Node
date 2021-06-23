import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata"
import "express-async-errors"

import "./database"

import {router} from "./routes"

const app = express();

app.use(express.json()) // significa que estamos habilitando nossa aplicação para trabalhar com json


app.use(router)

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
        return response.status(400).json({
            error: error.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

// roda uma localhost na porta 3000 (primeiro parâmetro)
app.listen(3000, () => console.log("server is running"))
