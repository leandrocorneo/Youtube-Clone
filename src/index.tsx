import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MenuStore } from './contexts/menuContext';
import { SearchStore } from './contexts/searchContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MenuStore>
      <SearchStore>
        <App />
      </SearchStore>
    </MenuStore>
  </React.StrictMode>
);

