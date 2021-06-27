import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UserRespositories";

import { compare } from "bcryptjs"

import { sign } from "jsonwebtoken"

interface IAuthenticateRequest {
    email: string,
    password: string
}

class AuthenticateUserService {

    async execute({email, password}: IAuthenticateRequest) {

        const usersRepositories = getCustomRepository(UsersRepositories);

        // Verificar se email existe
        const user = await usersRepositories.findOne({
            email
        })

        if (!user) {
            throw new Error("Incorrect email/password")
        }

        // Verificar se a senha está correta
        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("Incorrect email/password")
        }

        // Gerar token

        const token = sign({
            email: user.email,
        }, "e8d34f8c15371a97ddb1a4d02c6e4990", {
            subject: user.id,
            expiresIn: "1d"
        })

        console.log(token)
        return token;


    }

}

export { AuthenticateUserService }