import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UploadForm from "./components/UploadForm";
import Navigation from "./components/Navigation";

ReactDOM.render(
  <React.StrictMode>
    <UploadForm/>
    <Navigation/>
  </React.StrictMode>,
  document.getElementById('root')
);

