import React from "react";
import { BrowserRouter } from 'react-router-dom';

import MainLayout from './components/layouts/MainLayout'
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainLayout />
      </div>
    </BrowserRouter>
  );
}

export default App;
