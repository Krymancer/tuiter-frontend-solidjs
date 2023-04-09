import { createSignal, Show } from "solid-js";

import { useGlogalContext } from "~/store";
import api from "~/api";
import { useNavigate } from "solid-start";

export default function Login() {
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [remember, setRemember] = createSignal(false);

  const [error, setError] = createSignal(false);

  const { setUser, setToken } = useGlogalContext();

  const navigate = useNavigate();
  
  async function handleLogin() {
    try {
      const response = await api.login(username(), password());
      setToken(response.token);
      setUser(response.user);
      navigate("/");
    }catch(e) {
      setError(true);
    }
  }

  return (
    <main class="flex gap-4 items-center justify-center h-1/2 overflow-hidden">
      <form class="w-full max-w-2xl" onSubmit={e => {e.preventDefault(); handleLogin();}}>
      <div class="mb-6">
        <input type="text" id="email" class="bg-gray-900 border text-white outline-none border-none text-sm rounded-full w-full p-4 placeholder:text-white placeholder:font-bold" placeholder="Username" required onChange={e => setUsername(e.target.value)} value={username()} />
      </div>
      <div class="mb-6">
        <input type="password" id="password" class="bg-gray-900 border text-white outline-none border-none text-sm rounded-full w-full p-4 placeholder:text-white placeholder:font-bold" placeholder="Password" required onChange={e => setPassword(e.target.value)} value={password()}/>
      </div>
      <div class="flex items-start mb-6 justify-between px-4">
        <div class="flex items-center">
          <div class="flex items-center h-5">
            <input id="remember" type="checkbox" class="w-4 h-4 border appearance-none rounded-full bg-gray-900 checked:bg-brand" onChange={e => setRemember(e.target.checked)} checked={remember()}/>
          </div>
          <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 outline-none">Remember me</label>
        </div>
        <button type="submit" class="text-gray-700 font-bold bg-brand hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center">Login</button>
      </div>
      <div>
        <Show when={error()} fallback={null}>
          <Alert message="Something gone wrong" />
        </Show>
      </div>
    </form>
    </main>
  );
}

function Alert(props: {message: string}) {
  return (
    <div class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
      <span class="sr-only">Danger</span>
      <div>
        <span class="font-medium">Something gone wrong:</span>
          <ul class="mt-1.5 ml-4 list-disc list-inside">
            <li>Chek your username and password are correct</li>
        </ul>
      </div>
    </div>
  );
}