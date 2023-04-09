import { get } from "~/api";

type Author = {
  id: string;
  username: string;
  bio: string;
  icon: string;
  created_at: number;
}

type Tweet = {
  id: string;
  content: string;
  created_at: string;
  likes: number;
  author: Author;
}

type GetTweetsResponse = {
  tweets: Tweet[];
}

export default async function createTweet() {
  const response = await get("/tweet");
  return response  as GetTweetsResponse;
}