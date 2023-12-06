'use client'

import { FunctionComponent } from "react"
import { Post } from "../type"

export const PostsList: FunctionComponent<{ posts: Post[] }> = ({ posts }) => {
    return (
        <div className="grid grid-col-3 gap-4 w-[1200px] mx-auto">
            {
                [0, 1, 2].map((columnIndex) => (
                    <div key={columnIndex}>
                        {
                            posts.map((post, index) => {
                                if (columnIndex % 3 === index) {
                                    return (
                                        <div
                                            key={post.id}
                                            className="mb-4 last:mb-0"
                                        >
                                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                                <div className="px-6 py-4">
                                                    <div className="font-bold text-xl mb-2">{post.title}</div>
                                                    <p className="text-base">
                                                        {post.content}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            })
                        }
                    </div>
                ))
            }
        </div>
    );
};