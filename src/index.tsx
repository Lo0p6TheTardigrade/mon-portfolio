// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/main.scss';
import reportWebVitals from './reportWebVitals';

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
export default store;
