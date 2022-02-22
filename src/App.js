import React from 'react';

// Redux
import store from './store/store';
import { Provider } from 'react-redux';

import Form from './components/Form';
import Result from './components/Result';

function App() {
  return (
    <Provider store={store}>
      <div className='h-[100vh] flex'>
        <div className='w-[30%] m-auto px-3 py-5 border-2 border-black flex flex-col gap-y-3'>
          <h2 className='w-2/4 text-2xl font-medium'>Estimate your fare and ride with BEAT</h2>
          <div className='flex'>
            <Form />
            <Result />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
