import React from 'react';
import ReactDOM from 'react-dom';
import './assets/tailwind.css';
import Root from './client/Root'
import reportWebVitals from './reportWebVitals';

export { default as Home } from './pages/Home';
export { default as About } from './pages/About';
export { default as SignIn } from './pages/SignIn';
export { default as resetPassword } from './pages/resetPassword';


ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
