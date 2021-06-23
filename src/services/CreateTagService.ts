import { getCustomRepository } from "typeorm"
import { TagsRepostiories } from "../repositories/TagsRepositories";

class CreateTagService {

    async execute(name: string) {
        const tagsRepositories = getCustomRepository(TagsRepostiories);

        if (!name) {
            throw new Error("Invalid name")
        }

        const tagAlreardyExists = await tagsRepositories.findOne({
            name
        })

        if (tagAlreardyExists) {
            throw new Error("Tag already exists")
        }

        const tag = tagsRepositories.create({
            name
        })

        await tagsRepositories.save(tag)
        return tag;
 
    }

}

export { CreateTagService }