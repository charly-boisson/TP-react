import React, { Component } from "react";
import { DEFAULT_STATE } from '../../state/initState';
import { Link } from 'react-router-dom'

class Nav extends Component {

  constructor(props){
    super(props);
    this.state = {DEFAULT_STATE}
  }

  authentification = () => {
    this.setState({ isconnect: !this.state.isconnect})
  }

  render() {

    const { isconnect } = this.state

    return (
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
            <li className="nav-item">
              <button onClick={this.authentification} className="nav-link">
                { isconnect ?
                  <span>Logout</span>
                  :
                  <span>Login</span>
                }
              </button>
            </li>
          </ul>

      </nav>
  </div>
    );
  }
}
export default Nav;
