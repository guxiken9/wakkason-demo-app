import { Search } from "./lib/component/Search";
import { getPosts } from "./lib/posts";

export default async function Home() {
  const posts = await getPosts();
  return (
    <div>
      <Search posts={posts}></Search>
    </div>
  )
};
