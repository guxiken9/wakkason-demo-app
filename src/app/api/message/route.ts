import { getPool, singleQuery } from "@/app/lib/tidb";
import { Message } from "@/app/lib/type";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ["query", "error", "info", "warn"]
},
)

const sql = "INSERT INTO messages (recipient_id, scheduled_time, title, message) VALUES (?, ?, ?, ?);"

export async function POST(request: Request) {
    const { m } = await request.json();
    console.log(m)
    const param = [m.recipient_id, m.scheduled_time, m.title, m.message];
    console.log(param)

    try {
        const { results } = await singleQuery(sql, param);
    } catch (error) {
        console.log(error);
        return new Response("", {
            status: 500,
        });
    }
    return new Response("", {
        status: 200,
    });
}
