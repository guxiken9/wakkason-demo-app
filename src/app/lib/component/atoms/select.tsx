"use client";
import { FunctionComponent, useEffect, useState } from "react";
import { Users } from "../../type";

export const Select: FunctionComponent<{}> = () => {
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
    <select
      id="countries"
      className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      {users.map((user) => (
        <option key={user.user_id} value={user.user_id}>
          {user.username}
        </option>
      ))}
    </select>
  );
};
