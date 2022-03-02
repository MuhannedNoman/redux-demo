import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from "react-redux"
import  counterReducer  from "./features/counter"
import  userReducer  from "./features/users"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
