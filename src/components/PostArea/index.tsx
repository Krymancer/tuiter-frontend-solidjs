import { Show, createSignal } from 'solid-js';

import { useGlogalContext } from "~/store";
import api from '~/api';

export default function Navbar() {
  const [content, setContent] = createSignal("");

  const { user, token } = useGlogalContext();

  async function handlePostTweet() {
    if(content() === "") return;
    console.log(content(), token() ?? "");
    await api.createTweet(content(), token() ?? "");
  }

  return (
    <Show when={user() !== null} fallback={null} >
      <div class="flex flex-col bg-gray-900 rounded-2xl max-w-2xl w-1/3 box-border p-5">
          <div class="flex flex-row gap-2"> 
              <img src={user()!.icon} class="rounded-full w-12 h-12" />
              <textarea placeholder="What's up?" class="bg-transparent text-white outline-none w-full resize-none" onChange={e => setContent(e.target.value)} value={content()} />
          </div>
          <div class="rounded-full bg-brand text-gray-700 hover:bg-yellow-500 font-bold cursor-pointer transition w-20 flex items-center justify-center text-lg self-end" onClick={handlePostTweet}>
            Tweet
          </div>
      </div>
    </Show>
  );
}
