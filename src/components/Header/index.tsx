import { Component } from "solid-js";

import Logo from "@components/Logo";
import Search from "@components/Search";
import User from "@components/User";

const Header : Component = () => {
        return <div class="flex flex-row py-4 justify-around w-full">
            <Logo/>
            <Search />
            <User username="krymancer" icon="https://avatars.githubusercontent.com/u/17505605?v=4" />
        </div>
};

export default Header;
