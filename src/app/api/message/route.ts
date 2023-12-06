import { postsMessage } from "@/app/lib/messages";
import { ScheduledPostMessage } from "@/app/lib/type";

export async function POST(request: Request) {
    const  message: ScheduledPostMessage = await request.json();
    
    const result = await postsMessage(message);
    return new Response(JSON.stringify(result), {
        status: 200,
    });
    
}