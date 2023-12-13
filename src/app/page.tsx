import { getPosts } from "./api/search/route";
import { Search } from "./lib/component/Search";

export default async function Home() {
  const posts = await getPosts();
  return (
    <div>
      <Search posts={posts}></Search>
    </div>
  )
};
