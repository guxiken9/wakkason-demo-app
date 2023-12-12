import { Message } from "@/app/lib/type";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function POST(request: Request) {
    const message: Message = await request.json();
    console.log("---------------")
    console.log(message)
    console.log("---------------")

    const result = prisma.messages.create({
        data: {
            recipient_id: message.recipient_id,
            title: message.title,
            scheduled_time: message.scheduled_time,
            message: message.message,
        }
    })
    console.log(result);
    
    return new Response(JSON.stringify(result), {
        status: 200,
    });
    
}
