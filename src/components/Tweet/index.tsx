import { Component } from "solid-js";
import { AiFillHeart, AiOutlineHeart  } from 'solid-icons/ai'

interface TweetProps {
        icon: string;
        username: string;
        likes: number;
        content: string;
        time: string;
}

const Tweet: Component<TweetProps> = (props: TweetProps) => {
            return <div class="flex flex-col bg-gray-900 rounded-2xl p-4 max-w-2xl flex-grow">
            <div class="flex flex-col gap-2">
                <div class="flex gap-1">
                    <img src={props.icon} class="rounded-full w-12 h-12" />
                    <span class="font-bold">{`@${props.username} - `}<span class="text-sm font-thin text-gray-400">{`${props.time} minutes ago`}</span></span>
                </div>
                <div class="flex px-16">
                    <pre>{props.content}</pre>
                </div>
            </div>
            <div class="self-end cursor-pointer flex items-center gap-1 hover:text-brand">
                <AiOutlineHeart size={24} />
                {props.likes}
            </div>
        </div>
};

export default Tweet;
