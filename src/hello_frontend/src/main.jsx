import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { Provider } from 'react-redux';
import { store } from './Base/store/Store';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <BrowserRouter>
  <React.StrictMode>
    <App />
    <Toaster position="top-right" toastOptions={{
        error: {
          style: {
            backgroundColor: 'white',
            color: 'red', 
            border: '1px solid red', 
          },
        },
      }} />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>
);
