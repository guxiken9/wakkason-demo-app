"use client";

import { FormEventHandler } from "react";
import { fileToBase64 } from "../fileToBase64";
import { Memory } from "../type";

const handleSubmit: FormEventHandler<HTMLElement> = async (events) => {
  events.preventDefault();
  const form = new FormData(events.target as HTMLFormElement);
  const title = form.get("title");
  const memory = form.get("memory");
  const file = form.get("picture") as File;
  let base64 = "";

  await fileToBase64(file)
    .then((base64String) => {
      base64 = base64String;
    })
    .catch((error) => {
      console.error("Error converting file to Base64:", error);
    });

  const m: Memory = {
    created_by: 1,
    title: (title as string) || "",
    memory: (memory as string) || "",
    image: base64 || "",
  };

  console.log(m);
  const url = process.env.NEXT_PUBLIC_API_BASE_URL + "memory";
  const response = fetch(url, {
    method: "POST",
    body: JSON.stringify(m),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response);
};

export const PostMemory = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="text-xl font-bold sm:text-3xl">Post a memory</h2>
        </div>
        <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10">
          <form onSubmit={handleSubmit}>
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
                Memory
              </label>
              <div className="mt-1">
                <textarea
                  name="memory"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-100 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Leave your memory here ..."
                ></textarea>
              </div>
            </div>
            <div>
              <div>
                <label
                  htmlFor="hs-feedback-post-comment-textarea-1"
                  className="block mb-2 text-sm font-medium"
                >
                  Picture
                </label>
                <input
                  className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="picture"
                  name="picture"
                  type="file"
                ></input>
              </div>
              <div className="mt-1"></div>
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
