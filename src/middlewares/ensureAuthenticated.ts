import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"


interface IPayload {
    sub: string
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    // Receber o token
    const authToken = request.headers.authorization

    if (!authToken) {
        return response.status(401).end()
    }

    const [, token] = authToken.split(" ")

    // Validar se o token está preenchido
    if (!token) {
        return response.status(401).end();
    }

    // Conferir se o token é válido
    try {
        const { sub } = verify(token, "e8d34f8c15371a97ddb1a4d02c6e4990") as IPayload

        request.user_id = sub

    }
    catch(error) {
        return response.status(401).end(); 
    }

    // Recuperar informações do usuário



    return next();

}