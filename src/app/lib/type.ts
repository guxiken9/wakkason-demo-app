export type Post = {
    id: string;
    title: string;
    content: string;
    created_at?: string;
};

export const posts: Post[] = [{
    id: "1",
    title: "2022/7/28_成長するまーくんとあさがお",
    content: "まーくんとの思い出_夏休み_朝顔_まーくん",
}, {
    id: "2",
    title: "2022/09/18_8歳のお誕生日",
    content: "まーくんとの思い出_誕生日",
},{
    id: "3",
    title: "2023/5/14_母の日のプレゼントはおかあさんの似顔絵",
    content: "まーくんとの思い出_おかあさん_母の日_似顔絵_プレゼント",
},{
    id: "4",
    title: "2023/10/08_お勉強しててえらい",
    content: "まーくんとの思い出＿勉強",
},{
    id: "5",
    title: "2023/11/01_おばあちゃんと応援",
    content: "まーくんとの思い出＿応援_おばあちゃん",
    }, {
    id: "6",
    title: "2023/12/12_まーくん授業参観",
    content: "まーくんとの思い出＿授業参観",
}];

export const searchedPosts: Post[] = [{
    id: "1",
    title: "冬の思い出",
    content:"冬の八海山はとても綺麗でした。",
}, {
    id: "2",
    title: "冬の思い出",
    content : "冬の槍ヶ岳はとてもきれいでした。"
}];

// 検索結果
export type SearchPostsResponse = {
    total: number;
    total_pages: number;
    results: Post[];
};

export type Memory = {
    title: string;
    memory: string;
    image?: string;
    photo_url?: string;
    created_by: number;
}

export type ScheduledPostMessage = {
    to_user: number;
    from_user: number;
    title: string;
    message: string;
    image?: string;
    photo_url?: string;
    scheduled_time: string;
}

export type User = {
    user_id: number;
    username: string;
    email: string;
    password_hash: string;
    created_at: string; // 仮に文字列として扱うが、実際の状況に合わせて日時型に変更することが望ましい
}
