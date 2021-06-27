import { Request, Response } from "express";
import { CreateComplimentService } from "../services/ComplimentService";

class CreateComplimentController {

    async handle(request: Request, response: Response) {

        const { tag_id, user_receiver, message } = request.body

        const userid = request.user_id

        const createComplimentService = new CreateComplimentService();

        const compliment = await createComplimentService.execute({
            tag_id,
            user_receiver,
            user_sender: userid,
            message
        })

        return response.json(compliment)


    }

}

export { CreateComplimentController }