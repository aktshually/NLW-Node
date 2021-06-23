import {EntityRepository, Repository} from "typeorm"
import {Tag} from "../entities/Tag"


@EntityRepository(Tag)
class TagsRepostiories extends Repository<Tag> {
}

export { TagsRepostiories }