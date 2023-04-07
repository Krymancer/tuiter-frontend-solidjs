import { Component } from "solid-js";

interface PostAreaProps {
        icon: string;
}

const PostArea: Component<PostAreaProps> = (props: PostAreaProps) => {
            return <div class="flex flex-col bg-gray-900 rounded-2xl p-4 max-w-2xl flex-grow">
            <div class="flex flex-row gap-2"> 
                <img src={props.icon} class="rounded-full w-12 h-12" />
                <textarea placeholder="What's up?" class="bg-transparent color-white outline-none w-full resize-none" />
            </div>
            <div class="rounded-full bg-brand text-gray-700 hover:bg-yellow-500 font-bold cursor-pointer transition w-20 flex items-center justify-center text-lg self-end">
                Tweet
            </div>
        </div>
};

export default PostArea;
