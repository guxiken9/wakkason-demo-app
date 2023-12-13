import { Search } from "../lib/component/Search";
import { Post, posts } from "../lib/type";

// TODO:API呼び出しに変更
const getPosts = async (): Promise<Post[]> => {
    return posts;
}

export default async function Home() {
    const posts = await getPosts();
    return (
        <div>
            <Search posts={posts}></Search>
        </div>
    )
};