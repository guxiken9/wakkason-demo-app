import { singleQuery } from "@/app/lib/tidb";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()
const sql = "INSERT INTO messages (recipient_id, scheduled_time, title, message, picture) VALUES (?, ?, ?, ?, ?);"

export async function POST(request: Request) {
    const { m } = await request.json();
    console.log(m)
    const param = [m.recipient_id, m.scheduled_time, m.title, m.message, m.picture];
    console.log(param)

    try {
        const { results } = await singleQuery(sql, param);
        return new Response("", {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return new Response("", {
            status: 500,
        });
    } finally {

    }
    
}

export async function GET() {
    const result = await prisma.messages.findMany();
    return new Response(JSON.stringify(result), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
