import type { Component } from 'solid-js';

import Main from '@pages/Main';

const App: Component = () => {
  return (
    <div class="h-screen w-screen flex items-center justify-center overflow-hidden">
        <Main />
    </div>
  );
};

export default App;
