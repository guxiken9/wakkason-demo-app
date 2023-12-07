import { FunctionComponent } from "react";

export const TextArea: FunctionComponent<{ placeholder: string }> = ({
  placeholder,
}) => {
  return (
    <textarea
      name="hs-feedback-post-comment-textarea-1"
      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-100 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
      placeholder={placeholder}
    ></textarea>
  );
};
