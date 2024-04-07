import React from 'react';
import { Provider } from 'react-redux';
import Tasks from './components/redux/components/task';
import Store from './components/redux/stores';


function App(){
    return(
        <Provider store={Store}> {/* Supplies store to all components */}
          <Tasks/>
        </Provider>
    )
}

export default App;