import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default () => {
    return (
        <>
        <div id="homebtn">
            <Link to="/newLibrary"><button className="btn btn-primary btn-lg">Create a library</button></Link>
            <Link to="/enterLibrary"><button className="btn btn-primary btn-lg">Enter an existing library</button></Link>
        </div>
        </>
    );
}