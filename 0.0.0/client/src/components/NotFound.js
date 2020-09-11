import React from 'react';
import { useHistory } from "react-router-dom";
import "../index.scss";

function NotFound() {
    const history = useHistory();
    return (
        <div className="App">
                <p>404 Not Found</p>
                <button onClick={() => {history.push("/")}}>Home</button>
        </div>
    );
}

export default NotFound;
