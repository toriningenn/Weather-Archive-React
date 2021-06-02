import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navigation = (props: {}) => {

    return <div>
        <Link to="/upload">Загрузить файл</Link>
        <Link to="/archive">Просмотр архива</Link>
    </div>
}

export default Navigation;