import { Post, SearchPostsResponse, posts, searchedPosts } from "@/app/lib/type";

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

// TODO:API呼び出しに変更
export const getPosts = async (): Promise<Post[]> => {
    return posts;
}

// TODO:API呼び出しに変更
const searchPosts = async (query: string): Promise<SearchPostsResponse> => {
    const params = new URLSearchParams();
    return { total: 1, total_pages: 1, results: searchedPosts };
}