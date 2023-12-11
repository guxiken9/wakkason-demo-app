import { getUsers } from "@/app/lib/users";

export async function GET(request: Request) {
    const result = await getUsers();
    return new Response(JSON.stringify(result), {
        status: 200,
    });
}