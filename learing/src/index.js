import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import Counter from './components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter></Counter>
    {/* <Login />
    <Register /> */}
  </React.StrictMode>
);
