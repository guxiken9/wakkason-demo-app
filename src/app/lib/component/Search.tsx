"use client";
import { FunctionComponent, useState, useTransition } from "react";
import { Post, SearchPostsResponse } from "../type";
import { VscSearch } from "react-icons/vsc";
import { Loading } from "./Loading";
import { PostsList } from "./PhotoList";

const PostListWrapper: FunctionComponent<{
  loading: boolean;
  searchedPosts: Post[] | null;
  posts: Post[];
}> = ({ loading, searchedPosts, posts }) => {
  if (loading) {
    return <Loading />;
  }
  if (searchedPosts) {
    return <PostsList posts={searchedPosts} />;
  }
  return <PostsList posts={posts} />;
};

export const Search: FunctionComponent<{
  posts: Post[];
}> = ({ posts }) => {
  const [query, setQuery] = useState<string | null>(null);
  const [searching, setSearching] = useState(false);
  const [searchedPosts, setSearchedPosts] = useState<Post[] | null>(null);
  const [loading, startTransition] = useTransition();
  const url = process.env.NEXT_PUBLIC_API_BASE_URL;
  return (
    <div>
      <div className="my-8 flex justify-center">
        <input
          className="w-96 mr-4 p-2 bg-slate-100"
          value={query ?? ""}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button
          className=" py-2 px-4 bg-slate-100"
          onClick={async () => {
            try {
              const response: Response = await fetch(`api/search`, {
                method: "POST",
                body: JSON.stringify({
                  query,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              });
              if (!response.ok) {
                throw response;
              }
              const json: SearchPostsResponse = await response.json();
              console.log(json);
              startTransition(() => {
                setSearchedPosts(json.results);
              });
              setSearching(false);
            } catch (error) {
              console.error(error);
              alert("検索中にエラーが発生しました");
              setSearchedPosts([]);
            } finally {
              setSearching(false);
            }
          }}
        >
          <VscSearch />
        </button>
      </div>
      <PostListWrapper
        loading={searching || loading}
        searchedPosts={searchedPosts}
        posts={posts}
      />
    </div>
  );
};
