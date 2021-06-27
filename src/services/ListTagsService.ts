import { getCustomRepository } from "typeorm"
import { TagsRepostiories } from "../repositories/TagsRepositories"
import { classToPlain } from "class-transformer"

class ListTagService {

    async execute() {

        const tagsRepositories = getCustomRepository(TagsRepostiories)

        const tags = await tagsRepositories.find()

        return classToPlain(tags)

    }

}

export { ListTagService }