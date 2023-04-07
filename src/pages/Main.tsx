import {Component} from 'solid-js';

import Header from '@components/Header';
import PostArea from '@src/components/PostArea';
import Tweet from '@src/components/Tweet';

const ICON = "https://avatars.githubusercontent.com/u/17505605?v=4";

const Main : Component = () => {
    return <div class="h-screen w-screen flex flex-col items-center">
            <Header/>
            <div class="flex flex-col max-w-2xl w-full gap-6">
                <PostArea icon={ICON} />
                <div>
                <Tweet username="krymancer" icon={ICON} content="This is a test!!!" likes={0} time={12} />
                </div>
            </div>
    </div>;
};

export default Main;
