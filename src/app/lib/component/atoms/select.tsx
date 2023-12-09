import { FunctionComponent } from "react";

export const Select: FunctionComponent<{}> = () => {
  return (
    <select
      id="countries"
      className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value="1">デモ1</option>
      <option value="2">デモ2</option>
    </select>
  );
};
