import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from  'react-redux';
import { configureStore } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

import {Helmet} from "react-helmet";

import MainLayout from './components/layouts/MainLayout'
import "./App.scss";

function App() {
  
  const { store, persistor } = configureStore();

  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <div className="App mt-4 pt-4">
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Future Lithics is a web & software consultancy founded by Chad R. Denaux." />
                <title>Future Lithics</title>
                <link rel="canonical" href="https://futurelithics.com" />
            </Helmet>
            <MainLayout />
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
