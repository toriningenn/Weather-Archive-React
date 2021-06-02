import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App";
import UploadForm from "./components/UploadForm";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navigation from "./components/Navigation";

ReactDOM.render(
    <div className="App text-white bg-dark">
        <Router>
            <Navigation/>
            <Switch>
                <React.StrictMode>
                    <Route path="/archive" exact component={() => <App/>}/>
                    <Route path="/upload" exact component={() => <UploadForm/>}/>
                </React.StrictMode>
            </Switch>
        </Router>
    </div>,
    document.getElementById('root')
);

