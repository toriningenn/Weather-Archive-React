import React from "react";
import { Link } from "react-router-dom";

const Navigation = (props: {}) => {

    return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Погода в Москве</a>
            <div className="nav nav-tabs" id="tab" role="tablist">
        <Link to="/upload"class="nav-link active" id="tab-section-1" data-bs-toggle="tab" data-bs-target="#section-1" type="button" role="tab" aria-controls="nav-section-1" aria-selected="true">Загрузить файл</Link>
        <Link to="/archive"class="nav-link active" id="tab-section-2" data-bs-toggle="tab" data-bs-target="#section-2" type="button" role="tab" aria-controls="nav-section-2" aria-selected="true">Просмотр архива</Link>
            </div>
        </nav>
    </div>
}

export default Navigation;