import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";

export default props => {
    return (
        <header>
            <h1>PCS Blogs</h1>
            <nav>
                <ul>
                    <li><NavLink to="/blogList"><a href="#" onClick={props.onGoHome}>Blog List</a></NavLink></li>
                </ul>
            </nav>
        </header>
    );
}