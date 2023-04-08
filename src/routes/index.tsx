import { A } from "solid-start";
import { For } from "solid-js";

import PostArea from "~/components/PostArea";
import Tweet from "~/components/Tweet";

type TweetType = {
  icon: string;
  username: string;
  likes: number;
  content: string;
  time: string;
}

function createNewTweet(username: string, content: string) : TweetType{
  return {
    icon: "https://avatars.githubusercontent.com/u/17505605?v=4",
    username,
    likes: 0,
    content,
    time: "12"
  };
}

const data = Array.from(Array(10).keys()).map((i: number) => createNewTweet(`krymancer-${i}`, `This is a test #${i}`));

export default function Home() {
  return (
    <main class="flex flex-col gap-4 items-center mb-2">
      <PostArea icon="https://avatars.githubusercontent.com/u/17505605?v=4"/>
      <For each={data}>
        {(tweet: TweetType) => <Tweet {...tweet} />}
      </For>
    </main>
  );
}
