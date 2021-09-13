import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index'
import App from './App';
import FamilyInfo from './profile/familyInfo'
import EduInfo from './profile/eduInfo'
import PersonalInfo from './profile/personalInfo'
import Preview from './profile/preview';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <Provider store = {store}>
    <App />
    <ToastContainer />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
