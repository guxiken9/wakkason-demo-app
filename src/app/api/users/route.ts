import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET(request: Request) {
    const result = await getUsers();
    return new Response(JSON.stringify(result), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const getUsers: any = async () => {
    const users = prisma.users.findMany()
    return users;
}