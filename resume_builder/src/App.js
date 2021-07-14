import { Router } from '@material-ui/icons';
import React from 'react';
import {  Route } from 'react-router-dom'
// import Routing from "./Routing"
import Ecommerce from "./cartPOC/Ecommerce"
import EcommerceStore from "./cartPOC/app/store";

// import Ball from './Component/Ball';
// import Bat from './Component/Bat';
// import User from './Component/User';
import { Provider } from "react-redux";
// import store from './store';
function App() {
  return (
    // 4
    // <Provider store={store}>
    //   <div className="App">
    //     <Ball></Ball>
    //     <Bat></Bat>
    //     <User></User>
    //   </div>
    // </Provider>
    <Provider store={EcommerceStore}>
      <Ecommerce>

      </Ecommerce>
    </Provider>
  );
}
export default App;