import { streamToResponse, ChatRequest } from 'ai';
import express, { Request, Response } from 'express';

import { InitiateChat } from '../controllers/chat';

const router = express.Router();

router.post('/chat/:id', async (req: Request<{ id: string }, any, ChatRequest>, res: Response) => {
    console.log('Incoming chat request')

    const chatId = req.params.id;

    if (!req.body) {
        return res.status(400).json({ error: 'Request body is required' });
    }

    if (!req.body.messages) {
        return res.status(400).json({ error: 'Messages are required' });
    }

    if (chatId === 'undefined') {
        return res.status(400).json({ error: 'Chat ID is required' });
    }

    try {
        const responseStream = await InitiateChat(req.body, chatId);

          return streamToResponse(responseStream, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error forwarding request to OpenAI' });
    }
});

export default router;
