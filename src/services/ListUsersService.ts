import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRespositories"
import { classToPlain } from "class-transformer"

class ListUserService {

    async execute() {

        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.find()

        return classToPlain(user);

    }

}

export { ListUserService }