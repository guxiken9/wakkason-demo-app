import { Message } from "@/app/lib/type";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function POST(request: Request) {
    const message: Message = await request.json();
    const result = await postMessage(message);
    
    return new Response(JSON.stringify(result), {
        status: 200,
    });
    
}

const postMessage = async (m: Message) => {
    const result = prisma.messages.create({
        data:m
    })
    return result;
}