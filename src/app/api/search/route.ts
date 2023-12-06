import { searchPosts } from "@/app/lib/posts";

export async function POST(request: Request) {
    const { query }: { query: unknown } = await request.json();
    // TODO:検索キーワードが空の場合は初期条件で検索したい
    if (typeof query !== 'string') {
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