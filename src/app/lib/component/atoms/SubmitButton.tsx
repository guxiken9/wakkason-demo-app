import { FunctionComponent } from "react";

export const SubmitButtom: FunctionComponent<{ name: string }> = ({ name }) => {
  return (
    <button
      type="submit"
      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    >
      {name}
    </button>
  );
};
