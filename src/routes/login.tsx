export default function Login() {
  return (
    <main class="flex gap-4 items-center justify-center h-1/2 overflow-hidden">
      <form class="w-full max-w-2xl">
      <div class="mb-6">
        <input type="email" id="email" class="bg-gray-900 border text-white outline-none border-none text-sm rounded-lg w-full p-2.5 placeholder:text-white placeholder:font-bold" placeholder="Username" required />
      </div>
      <div class="mb-6">
        <input type="password" id="password" class="bg-gray-900 border text-white outline-none border-none text-sm rounded-lg w-full p-2.5 placeholder:text-white placeholder:font-bold" placeholder="Password" required />
      </div>
      <div class="flex items-start mb-6 justify-between">
        <div class="flex items-center ">
          <div class="flex items-center h-5">
            <input id="remember" type="checkbox" class="w-4 h-4 border appearance-none rounded bg-gray-900 checked:bg-brand" required />
          </div>
          <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 outline-none">Remember me</label>
        </div>
        <button type="submit" class="text-gray-700 font-bold bg-brand hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Login</button>
      </div>
    </form>
    </main>
  );
}