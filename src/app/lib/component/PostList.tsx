'use client'

import { FunctionComponent } from "react"
import { Post } from "../type"

export const PostsList: FunctionComponent<{ posts: Post[] }> = ({ posts }) => {
    return (
        <div className="grid grid-cols-3 gap-4 w-[1200px] mx-auto">
            {posts.map((post, index) => (
                <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
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