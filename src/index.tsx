import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { MetaMaskProvider } from '@metamask/sdk-react';

import './index.css';
import App from './App';
import { ContextProvider } from './context/Context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: 'Example React Dapp',
          url: window.location.host,
        },
      }}
    >
      <ContextProvider>
        <Router>
          <App />
        </Router>
      </ContextProvider>
    </MetaMaskProvider>
  </React.StrictMode>
);
