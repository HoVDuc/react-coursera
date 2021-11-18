import './App.css';
import React from 'react'
import Main from './components/MainComponents';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
