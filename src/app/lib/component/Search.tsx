'use client';
import { FunctionComponent, useState } from "react";
import { Post, SearchPostsResponse } from "../type";
import { VscSearch } from 'react-icons/vsc';

export const Search: FunctionComponent = () => {
    {
        const [query, setQuery] = useState<string | null>(null);
        const [searchedPosts, setSearchedPosts] = useState<Post[] | null>(null);
        return (
            <div>
                <div className="my-8 flex justify-center">
                    <input
                        className="w-96 mr-4 p-2 bg-gray-700"
                        value={query ?? ''}
                        onChange={(e) => { setQuery(e.target.value); }}
                    />
                    <button
                        className="bg-gray-700 py-2 px-4"
                        onClick={async () => {
                            try {
                                const response: Response = await fetch(
                                    `http://localhost:3000/api/search`,
                                    {
                                        method: 'POST',
                                        body: JSON.stringify({
                                            query
                                        }),
                                        headers: {
                                            'Content-Type':
                                                'application/json'
                                        }
                                    }
                                );
                                if (!response.ok) {
                                    throw response;
                                }
                                const json: SearchPostsResponse = await response.json();
                                setSearchedPosts(json.results);
                            } catch (error) {
                                alert(
                                    '検索中にエラーが発生しました'
                                );
                                setSearchedPosts([]);
                            } finally {
                            }
                        }}
                    >
                        <VscSearch />
                    </button>
                </div>
            </div>
        )
    }