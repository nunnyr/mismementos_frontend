import React from 'react';
import {NavLink} from 'react-router-dom'
import { Header } from 'semantic-ui-react'

const NavBar = () => {
    return(
        <div>
              <Header as='h1'>Mis Mementos</Header>
        
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