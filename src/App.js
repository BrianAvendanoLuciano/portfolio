import React from 'react';
import './App.css';
import { Navitgation } from "./components/base/Navitgation";
import { SinglePage } from './components/SinglePage';

function App() {
  return (
    <div>
      <Navitgation />
      <SinglePage />
    </div>
  );
}

export default App;