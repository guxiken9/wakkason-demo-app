import getMessages from "../lib/getMessage";

export default async function Home() {
  const messages = await getMessages();

  return (
    <div className="grid grid-cols-3 gap-4 w-[1200px] mx-auto">
      {messages.map((message, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{message.title}</div>
            <p className="text-base">{message.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
