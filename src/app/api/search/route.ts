import { searchPosts } from "@/app/lib/posts";

export async function POST(request: Request) {
    const { query }: { query: unknown } = await request.json();
    if (!query || typeof query !== 'string') {
        const response = new Response('no qyery', {
            status: 400
        });
        return response;
    }
    const searchPostsResponse = await searchPosts(query);
    return new Response(JSON.stringify(searchPostsResponse), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}