import { Component } from "solid-js";
import { AiOutlineSearch } from 'solid-icons/ai';


const Search : Component = () => {
    return <div class="rounded-full flex items-center gap-1 bg-gray-900 py-2 px-5 ml-16 max-w-2xl flex-grow justify-self-center">
        <AiOutlineSearch size={24} />
        <input type="text" placeholder="Search" class="bg-transparent text-white p-1 placeholder-white outline-none w-full placeholder:font-bold text-lg"/>
    </div>
};

export default Search;
