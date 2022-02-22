import React from 'react';

// Redux
import { FETCH_LOCATIONS } from './redux/locations/locations.slice';

import { store } from './redux/store';
import { Provider } from 'react-redux';

import Form from './components/Form';
import Result from './components/Result';

store.dispatch(FETCH_LOCATIONS());

function App() {
  return (
    <Provider store={store}>
      <div className='h-[100vh] flex'>
        <div className='w-[30%] m-auto border-2 border-black flex flex-col gap-y-3'>
          <h2 className='px-3 py-5 w-2/4 text-2xl font-medium'>Estimate your fare and ride with BEAT</h2>
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
