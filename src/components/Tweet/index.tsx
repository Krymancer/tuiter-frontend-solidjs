import { AiFillHeart, AiOutlineHeart  } from 'solid-icons/ai'

export default function Tweet(props: { 
  icon: string;
  username: string;
  likes: number;
  content: string;
  time: string;
}) {
  return (
    <div class="flex flex-col bg-gray-900 rounded-2xl max-w-2xl w-1/3 box-border p-5">
        <div class="flex flex-col gap-2">
            <div class="flex gap-1">
                <img src={props.icon} class="flex flex-col rounded-full w-12 h-12" />
                <div class="flex flex-col gap-1">
                  <span class="font-bold">{`@${props.username} `}</span>
                  <span class="text-sm font-thin text-gray-400">{`${props.time} minutes ago`}</span>
                </div>
            </div>
            <div class="flex mt-2 pl-1">
                <pre class="font-sans">{props.content}</pre>
            </div>
        </div>
        <div class="self-end cursor-pointer flex items-center gap-1 hover:text-brand">
            <AiOutlineHeart size={24} />
            {props.likes}
        </div>
    </div>
  );
}