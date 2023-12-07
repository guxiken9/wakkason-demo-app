import { FunctionComponent } from "react";

export const Input: FunctionComponent<{ placeholder: string }> = ({
  placeholder,
}) => {
  return (
    <input
      type="text"
      className="py-3 px-4 block w-full border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-100 dark:text-gray-900 dark:focus:ring-gray-600"
      placeholder={placeholder}
    />
  );
};
