import { AiOutlineSearch } from 'solid-icons/ai';
import { IoExitOutline } from 'solid-icons/io'

export default function Navbar() {
  return (
    <nav class="flex flex-row py-4 justify-around w-full">
      <Logo/>
      <Search />
      <User username="krymancer" icon="https://avatars.githubusercontent.com/u/17505605?v=4" />
    </nav>
  );
}

function Logo() {
  return (
    <div class="flex cursor-pointer items-center w-1/3 justify-center">
      <a class="flex flex-row font-bold text-4xl">Tui<pre class="text-brand font-sans">ter</pre></a>
    </div>
  );
};

function Search() {
  return(
    <div class="rounded-full flex items-center gap-1 bg-gray-900 py-2 px-5 max-w-2xl w-1/3 flex-grow justify-self-center box-border">
        <AiOutlineSearch size={24} />
        <input type="text" placeholder="Search" class="bg-transparent text-white p-1 placeholder-white outline-none w-full placeholder:font-bold text-lg"/>
    </div>
  );
}

function User(props: {username: string, icon: string}) {
  return (
    <div class="flex flex-row items-center justify-around gap-4 w-1/3">
            <div class="flex flex-row items-center justify-around gap-4">
              <div class="flex flex-row gap-1 items-center">
                  <img src={props.icon} class="rounded-full w-10 h-10" />
                  <span class="font-bold text-md">{`@${props.username}`}</span>
              </div>
              <div class="flex items-center hover:text-brand cursor-pointer">
                  <IoExitOutline size={28}/>
              </div>
            </div>
        </div>
  );
}