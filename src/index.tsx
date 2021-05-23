import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UploadForm from "./components/UploadForm";
import WeatherTable from "./components/WeatherTable";

ReactDOM.render(
  <React.StrictMode>
    <WeatherTable/>
    <UploadForm/>
  </React.StrictMode>,
  document.getElementById('root')
);

