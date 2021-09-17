import React from 'react';
import logo from './logo.svg';
import { ethers } from 'ethers';
import './App.css';

function App() {
  if (typeof window.ethereum !== 'undefined') {
    console.log('Eth found!')
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    console.log('provider', provider)
  } else {
    console.log('No eth found')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V3</h1>
      </header>
    </div>
  );
}

export default App;