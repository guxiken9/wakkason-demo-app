import 'server-only';
import { Post, SearchPostsResponse, posts, searchedPosts } from "./type";


// TODO:API呼び出しに変更
export const getPosts = async (): Promise<Post[]> => {
    return posts;
}

// TODO:API呼び出しに変更
export const searchPosts = async (query: string): Promise<SearchPostsResponse> => {
    const params = new URLSearchParams();
    return { total: 1, total_pages: 1, results: searchedPosts };
}