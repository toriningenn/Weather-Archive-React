import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App";
import UploadForm from "./components/UploadForm";

ReactDOM.render(
    <React.StrictMode>
        <App/>
        <UploadForm/>
    </React.StrictMode>,
    document.getElementById('root')
);

