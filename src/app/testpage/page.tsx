"use client";
export default function TestPage() {
  const res = call();
  console.log(res);

  return <></>;
}

const call = async () => {
  const response: Response = await fetch(`api/users`, {
    method: "GET",
  });
  return response;
};
