import { Component } from "solid-js";
import { IoExitOutline } from 'solid-icons/io'

interface UserProps {
    username: string;
    icon: string;
}

const User: Component<UserProps> = (props: UserProps) => {
        return <div class="flex flex-row items-center justify-around gap-4">
            <div class="flex flex-row gap-1 items-center">
                <img src={props.icon} class="rounded-full w-10 h-10" />
                <span class="font-bold text-md">{`@${props.username}`}</span>
            </div>
            <div class="flex items-center hover:text-brand cursor-pointer">
                <IoExitOutline size={28}/>
            </div>
        </div>
};

export default User;
