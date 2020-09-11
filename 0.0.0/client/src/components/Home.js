import React from 'react';
import { useHistory } from "react-router-dom";
import "../index.scss";

function Home() {
    const history = useHistory();
    return (
        <div className="App">
            <p>Home</p>
        </div>
    );
}

export default Home;
