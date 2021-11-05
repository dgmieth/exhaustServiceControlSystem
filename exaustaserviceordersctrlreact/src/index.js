import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import Header from './elements/Header'
import reportWebVitals from './reportWebVitals';
import Main from './elements/Main';
import ModalUserOrInfo from './elements/modals/ModalUserOrInfo';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
