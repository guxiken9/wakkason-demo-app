export type Post = {
    id: string;
    title: string;
    content: string;
    created_at: string;
};

export const posts: Post[] = [{
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

export const searchedPosts: Post[] = [{
    id: "1",
    title: "冬の思い出",
    content: "とても寒かったです。 とても寒かったです。とても寒かったです。とても寒かったです。とても寒かったです。とても寒かったです。",
    created_at: ""
}, {
    id: "2",
    title: "冬の思い出",
    content: "とても寒かったです。 とても寒かったです。とても寒かったです。とても寒かったです。とても寒かったです。とても寒かったです。",
    created_at: ""
}];

// 検索結果
export type SearchPostsResponse = {
    total: number;
    total_pages: number;
    results: Post[];
};

// 予約投稿メッセージ
export type ScheduledPostMessage = {
    notification_id: string,
    recipient_id: number;
    title: string;
    message: string;
    scheduled_time: string;
    created_at: string;
}

export type User = {
  user_id: number;
  username: string;
  email: string;
  password_hash: string;
  created_at: string; // 仮に文字列として扱うが、実際の状況に合わせて日時型に変更することが望ましい
}

export type Users = User[]