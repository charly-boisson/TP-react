import React from "react";
import { Link } from 'react-router-dom'

const Nav = () =>
<div>
  <nav className="navbar navbar-expand navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/articles">Articles</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/albums">Albums</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/utilisateurs">Utilisateurs</Link>
          </li>
        </ul>
        <button className="navbar-toggler" type="button" >
            Login
          </button>
    </nav>
</div>

export default Nav;
