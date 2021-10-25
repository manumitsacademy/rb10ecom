import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h3>App Component</h3>
      </div>
    </Provider>
  );
}

export default App;
