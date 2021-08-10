import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from  'react-redux';
import { configureStore } from './redux/store.js';

import MainLayout from './components/layouts/MainLayout'
import "./App.scss";

function App() {
  
  const { store } = configureStore();

  return (
    <Provider store={store} >
      <BrowserRouter>
        <div className="App">
          <MainLayout />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
