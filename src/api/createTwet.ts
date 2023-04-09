import { post } from "~/api";

export default async function createTweet(content: string, token: string) {
  const data = {
    content
  };

  const response = await post("/tweet", data, token);
  return response;
}