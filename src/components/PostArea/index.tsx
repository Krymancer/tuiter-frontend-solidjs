export default function Navbar(props: {icon: string}) {
  return (
    <div class="flex flex-col bg-gray-900 rounded-2xl max-w-2xl w-1/3 box-border p-5">
        <div class="flex flex-row gap-2"> 
            <img src={props.icon} class="rounded-full w-12 h-12" />
            <textarea placeholder="What's up?" class="bg-transparent text-white outline-none w-full resize-none" />
        </div>
        <div class="rounded-full bg-brand text-gray-700 hover:bg-yellow-500 font-bold cursor-pointer transition w-20 flex items-center justify-center text-lg self-end">
            Tweet
        </div>
    </div>
  );
}
