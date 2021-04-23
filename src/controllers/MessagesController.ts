import { Request, Response } from 'express'
import { MessagesService } from '../services/MessageService'

class MessagesController {
    async create(req: Request, res: Response) {
        const { admin_id, text, user_id } = req.body
        const messageService = new MessagesService()

        const message = await messageService.create({ 
            admin_id,
            text,
            user_id 
        })

        return res.json(message)
    }
}

export { MessagesController }