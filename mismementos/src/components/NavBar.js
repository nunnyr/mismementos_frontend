import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return(
        <div>
            <h1>present</h1>
        
        <ul className="nav">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/login">Login</NavLink>
            </li>
            <li>
                <NavLink to="/register">Register</NavLink>
            </li>
            <li>
                <NavLink to="/profile">Profile</NavLink>
            </li>

        </ul>
        </div>
    )
}

export default NavBar;