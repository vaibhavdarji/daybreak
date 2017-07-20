import React/*, { Component }*/ from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.png';
const Navigation = () => (

    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <Link className="navbar-brand" to="/"><img src={logo} alt="Logo"/></Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/posts">Posts</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/comments">comments</Link>
            </li>
          </ul>
        </div>
    </nav>
)
export default Navigation;
