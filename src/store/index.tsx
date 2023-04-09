import { Accessor, Setter, createContext, useContext, createSignal } from 'solid-js';

type User = {
    id: string;
    username: string;
    bio: string;
    icon: string;
}

interface Context {
  user: Accessor<User | null>
  token: Accessor<string | null>;
  setUser: Setter<User | null>;
  setToken: Setter<string | null>;
}

const GlogalContext = createContext<Context>();

export function ContextProvider(props: any) {
  const [user, setUser] = createSignal<User | null>(null);
  const [token, setToken] = createSignal<string | null>(null);
  
  return (
    <GlogalContext.Provider value={{user, token, setUser, setToken}} >
      {props.children}
    </GlogalContext.Provider>
  );
}

export const useGlogalContext = () => useContext(GlogalContext)!;
