import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CarContextProvider } from './context/CarContext';
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider) {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Web3ReactProvider getLibrary={getLibrary}>
      <CarContextProvider>
        <App />
      </CarContextProvider>
     </Web3ReactProvider>
  </React.StrictMode>
);
