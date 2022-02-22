import React from 'react';

// Redux
import store from './store/store';
import { Provider } from 'react-redux';

import Options from './components/Options';
import Result from './components/Result';

function App() {
  return (
    <Provider store={store}>
      <div className='w-[40%] m-auto p-3 border-2 border-black flex flex-col gap-y-3'>
        <h2 className='w-2/4 text-2xl font-medium'>Estimate your fare and ride with BEAT</h2>
        <div className='flex'>
          <Options />
          <Result />
        </div>
      </div>
    </Provider>
  );
}

export default App;
