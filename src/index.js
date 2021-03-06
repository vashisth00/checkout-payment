import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MasterForm from './Pay';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import InsuranceBtn from './components/modal';

ReactDOM.render(
  <React.StrictMode>
    <div className="px-5 py-5">
    <InsuranceBtn></InsuranceBtn>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
