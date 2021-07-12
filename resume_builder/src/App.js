import React from 'react';
import Ball from './Component/Ball';
import Bat from './Component/Bat';
import { Provider } from "react-redux"
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Ball></Ball>
    
      </div>

    </Provider>

  );
}

export default App;
