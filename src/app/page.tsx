
type Post = {
  id: string;
  title: string;
  content: string;
  created_at: string;
};

const posts: Post[] = [{
  id: "1",
  title: "春の思い出",
  content: "桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。",
  created_at: ""
}, {
  id: "2",
  title: "春の思い出",
  content: "桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。",
  created_at: ""
}, {
  id: "3",
  title: "春の思い出",
  content: "桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。",
  created_at: ""
}, {
  id: "4",
  title: "春の思い出",
  content: "桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。",
  created_at: ""
}, {
  id: "5",
  title: "春の思い出",
  content: "桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。",
  created_at: ""
}, {
  id: "6",
  title: "春の思い出",
  content: "桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。",
  created_at: ""
}, {
  id: "7",
  title: "春の思い出",
  content: "桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。桜が綺麗でした。",
  created_at: ""
}];

// TODO:API呼び出しに変更
const getPosts = async (): Promise<Post[]> => {
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className="grid grid-cols-3 gap-4 w-[1200px] mx-auto">
      {posts.map((post) => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{post.title}</div>
            <p className="text-base">
              {post.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
};
