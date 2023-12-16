import { ScheduledPostMessage } from "./type";

const getMessages = async () => {

    const host = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/'
    const url = host+'api/message'
  let messages: ScheduledPostMessage[] = [];
  try {
    const response: Response = await fetch(url, {
      method: "GET",
    });
    if (!response.ok) {
      throw response;
    }
    const json: ScheduledPostMessage[] = await response.json();
    messages = json;
    console.log(messages);
  } catch (error) {
    console.error(error);
  }
  return messages;
};

export default getMessages;