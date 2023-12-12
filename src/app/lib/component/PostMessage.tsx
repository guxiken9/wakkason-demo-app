"use client";

import { FormEventHandler, useEffect, useState } from "react";
import { Message, Users } from "../type";

const handleSubmit: FormEventHandler<HTMLElement> = (events) => {
  events.preventDefault();
  const form = new FormData(events.target as HTMLFormElement);
  const to = form.get("to");
  const date = form.get("date");
  const title = form.get("title");
  const message = form.get("message");

  const m: Message = {
    recipient_id: parseInt(to as string),
    title: (title as string) || "",
    scheduled_time: (date as string) || "",
    message: (message as string) || "",
  };

  const response = fetch(`api/message`, {
    method: "POST",
    body: JSON.stringify({
      m,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const PostMessage = () => {
  const [users, setUsers] = useState<Users>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`api/users`, {
          method: "GET",
        });
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="text-xl font-bold sm:text-3xl">Post a message</h2>
        </div>
        <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 sm:mb-8">
              <label
                htmlFor="hs-feedback-post-comment-textarea-1"
                className="block mb-2 text-sm font-medium"
              >
                To
              </label>
              <select
                id="countries"
                name="to"
                className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {users.map((user) => (
                  <option key={user.user_id} value={user.user_id}>
                    {user.username}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4 sm:mb-8">
              <label
                htmlFor="hs-feedback-post-comment-textarea-1"
                className="block mb-2 text-sm font-medium"
              >
                Date
              </label>
              <input
                type="text"
                name="date"
                className="py-3 px-4 block w-full border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-100 dark:text-gray-900 dark:focus:ring-gray-600"
                placeholder="9999-12-31"
              />
            </div>
            <div className="mb-4 sm:mb-8">
              <label
                htmlFor="hs-feedback-post-comment-textarea-1"
                className="block mb-2 text-sm font-medium"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                className="py-3 px-4 block w-full border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-100 dark:text-gray-900 dark:focus:ring-gray-600"
                placeholder="Title"
              />
            </div>
            <div>
              <label
                htmlFor="hs-feedback-post-comment-textarea-1"
                className="block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  name="message"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-100 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Leave a message here ..."
                ></textarea>
              </div>
            </div>
            <div className="mt-6 grid">
              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
