import { OpenAIStream, ChatRequest } from "ai";
import OpenAI from 'openai';

export async function InitiateChat(req: ChatRequest, chatId: string): Promise<ReadableStream<any>> {
    const openai = new OpenAI();

    const { messages } = req

    try {
        const initialResponse = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            // @ts-ignore
            messages,
            stream: true,
            temperature: 0.7,
        });


        const stream = OpenAIStream(initialResponse);

        return stream
    } catch (error) {
        console.error(error);
        throw error;
    }
};