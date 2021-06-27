import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"

class ListUserSenderComplimentsService {

    async execute(user_id: string) {
        
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

        const compliments = complimentsRepositories.find({
            where: {
                user_sender: user_id
            },
            relations: ["userSender", "userReceiver", "tag"]
        })

        return compliments

    }

}

export { ListUserSenderComplimentsService }